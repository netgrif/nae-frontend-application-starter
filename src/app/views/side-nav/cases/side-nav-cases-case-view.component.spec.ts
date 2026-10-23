import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavCasesCaseViewComponent} from './side-nav-cases-case-view.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    AuthenticationMethodService,
    AuthenticationService,
    ConfigurationService,
    MaterialModule,
    MockAuthenticationMethodService,
    MockAuthenticationService,
    MockUserResourceService,
    TranslateLibModule,
    UserResourceService
} from '@netgrif/components-core';
import {HeaderComponentModule} from '@netgrif/components';
import {TemplateFrontendConfigurationService} from '../../../template-frontend-configuration.service';

describe('SideNavCasesCaseViewComponent', () => {
    let component: SideNavCasesCaseViewComponent;
    let fixture: ComponentFixture<SideNavCasesCaseViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                TranslateLibModule,
                HeaderComponentModule,
                HttpClientTestingModule,
                NoopAnimationsModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                {provide: AuthenticationMethodService, useClass: MockAuthenticationMethodService},
                {provide: AuthenticationService, useClass: MockAuthenticationService},
                {provide: UserResourceService, useClass: MockUserResourceService},
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService}
            ],
            declarations: [SideNavCasesCaseViewComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(SideNavCasesCaseViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });
});
