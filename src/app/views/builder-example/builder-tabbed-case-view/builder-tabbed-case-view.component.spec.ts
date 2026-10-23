import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BuilderTabbedCaseViewComponent} from './builder-tabbed-case-view.component';
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
    NAE_TAB_DATA,
    NAE_VIEW_ID_SEGMENT,
    TranslateLibModule,
    UserResourceService
} from '@netgrif/components-core';
import {HeaderComponentModule} from '@netgrif/components';
import {TemplateFrontendConfigurationService} from '../../../template-frontend-configuration.service';

describe('BuilderTabbedCaseViewComponent', () => {
    let component: BuilderTabbedCaseViewComponent;
    let fixture: ComponentFixture<BuilderTabbedCaseViewComponent>;

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
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
                {provide: NAE_VIEW_ID_SEGMENT, useValue: 'builder'},
                {provide: NAE_TAB_DATA, useValue: {tabViewComponent: undefined, tabViewOrder: 0}}
            ],
            declarations: [BuilderTabbedCaseViewComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(BuilderTabbedCaseViewComponent);
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
