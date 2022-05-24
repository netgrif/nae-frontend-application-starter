import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigurationService, LoggerService, ViewService} from '@netgrif/components-core';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {SideNavCasesCaseViewComponent} from './views/side-nav/cases/side-nav-cases-case-view.component';
import {SideNavTasksTaskViewComponent} from './views/side-nav/tasks/side-nav-tasks-task-view.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import {TabViewAllCaseComponent} from './views/side-nav/tabViewAllCase/tab-view-all-case.component';
import {RoleAssignmentComponent, WorkflowViewComponent} from '@netgrif/components';


@Injectable({
    providedIn: 'root'
})
export class TemplateFrontendViewService extends ViewService {
    constructor(configurationService: ConfigurationService, router: Router, loggerService: LoggerService) {
        // This class is managed by schematics. Avoid modifying it by hand.
        // If you want to add views to the application run the 'create-view' schematic.
        super([{id: 'RoleAssignmentComponent', class: RoleAssignmentComponent},
            {id: 'WorkflowViewComponent', class: WorkflowViewComponent},
            {id: 'TabViewAllCaseComponent', class: TabViewAllCaseComponent},
            {id: 'EmptyViewComponent', class: EmptyViewComponent},
            {id: 'SideNavTasksTaskViewComponent', class: SideNavTasksTaskViewComponent},
            {id: 'SideNavCasesCaseViewComponent', class: SideNavCasesCaseViewComponent},
            {id: 'SidenavComponent', class: SidenavComponent},
            {id: 'LoginComponent', class: LoginComponent}

        ], configurationService, router, loggerService);
    }
}
