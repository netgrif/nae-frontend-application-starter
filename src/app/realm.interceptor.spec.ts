import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ConfigurationService} from '@netgrif/components-core';
import {RealmInterceptor} from './realm.interceptor';

describe('RealmInterceptor', () => {
    let http: HttpClient;
    let httpMock: HttpTestingController;

    const setup = (defaultRealm?: string) => {
        const config = {
            services: {auth: {defaultRealm}},
            providers: {
                auth: {
                    address: 'http://localhost:8080/api',
                    endpoints: {login: '/auth/login', signup: '/auth/signup', logout: '/auth/logout'},
                },
            },
        };
        const get = jasmine.createSpy('get').and.callFake(() => config);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {provide: ConfigurationService, useValue: {get}},
                {provide: HTTP_INTERCEPTORS, useClass: RealmInterceptor, multi: true},
            ],
        });
        http = TestBed.inject(HttpClient);
        httpMock = TestBed.inject(HttpTestingController);
        return get;
    };

    afterEach(() => httpMock.verify());

    it('adds X-Realm-Id to login and signup', () => {
        setup('Admin');
        http.post('http://localhost:8080/api/auth/login', {}).subscribe();
        http.post('http://localhost:8080/api/auth/signup', {}).subscribe();
        for (const req of httpMock.match(() => true)) {
            expect(req.request.headers.get('X-Realm-Id')).toBe('Admin');
        }
    });

    it('does not add the header when realm is empty', () => {
        setup('');
        http.post('http://localhost:8080/api/auth/login', {}).subscribe();
        expect(httpMock.expectOne('http://localhost:8080/api/auth/login').request.headers.has('X-Realm-Id')).toBe(false);
    });

    it('does not add the header to other requests', () => {
        setup('Admin');
        http.get('http://localhost:8080/api/auth/logout').subscribe();
        http.post('http://localhost:8080/api/cases', {}).subscribe();
        expect(httpMock.expectOne('http://localhost:8080/api/auth/logout').request.headers.has('X-Realm-Id')).toBe(false);
        expect(httpMock.expectOne('http://localhost:8080/api/cases').request.headers.has('X-Realm-Id')).toBe(false);
    });

    it('resolves the configuration once for multiple requests', () => {
        const get = setup('Admin');
        http.post('http://localhost:8080/api/auth/login', {}).subscribe();
        http.post('http://localhost:8080/api/auth/signup', {}).subscribe();
        http.get('http://localhost:8080/api/cases').subscribe();
        httpMock.match(() => true);
        expect(get).toHaveBeenCalledTimes(1);
    });
});
