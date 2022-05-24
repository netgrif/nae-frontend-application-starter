import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavTasksTaskViewComponent} from './side-nav-tasks-task-view.component';
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

describe('SideNavTasksTaskViewComponent', () => {
    let component: SideNavTasksTaskViewComponent;
    let fixture: ComponentFixture<SideNavTasksTaskViewComponent>;

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
            declarations: [SideNavTasksTaskViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavTasksTaskViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
