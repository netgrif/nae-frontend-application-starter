import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavMyTasksTaskViewComponent} from './side-nav-my-tasks-task-view.component';
import {
    AuthenticationMethodService,
    ConfigurationService,
    FilterType,
    MaterialModule,
    NAE_TAB_DATA,
    SimpleFilter
} from '@netgrif/components-core';
import {HeaderComponentModule, PanelComponentModule} from '@netgrif/components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TemplateFrontendConfigurationService} from '../../../template-frontend-configuration.service';

describe('SideNavMyTasksTaskViewComponent', () => {
    let component: SideNavMyTasksTaskViewComponent;
    let fixture: ComponentFixture<SideNavMyTasksTaskViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                HeaderComponentModule,
                PanelComponentModule,
                BrowserAnimationsModule
            ],
            providers: [
                {provide: NAE_TAB_DATA, useValue: {baseFilter: new SimpleFilter('id', FilterType.TASK, {})}},
                AuthenticationMethodService,
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService}
            ],
            declarations: [SideNavMyTasksTaskViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavMyTasksTaskViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
