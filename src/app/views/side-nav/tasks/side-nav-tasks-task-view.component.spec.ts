import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavTasksTaskViewComponent} from './side-nav-tasks-task-view.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    AllowedNetsService,
    AllowedNetsServiceFactory,
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

describe('SideNavTasksTaskViewComponent', () => {
    let component: SideNavTasksTaskViewComponent;
    let fixture: ComponentFixture<SideNavTasksTaskViewComponent>;

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
            declarations: [SideNavTasksTaskViewComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            // view 'side-nav/tasks' is not defined in nae.json, so allowed nets cannot be loaded from configuration
            .overrideComponent(SideNavTasksTaskViewComponent, {
                add: {
                    providers: [{
                        provide: AllowedNetsService,
                        useFactory: (factory: AllowedNetsServiceFactory) => factory.createWithAllNets(),
                        deps: [AllowedNetsServiceFactory]
                    }]
                }
            })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(SideNavTasksTaskViewComponent);
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
