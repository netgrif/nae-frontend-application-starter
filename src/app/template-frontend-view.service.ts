import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigurationService, LoggerService, ViewService} from '@netgrif/components-core';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {SideNavAllTasksTaskViewComponent} from './views/side-nav/all-tasks/side-nav-all-tasks-task-view.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import {
    DashboardComponent,
    DefaultPublicResolverComponent,
    DefaultPublicTaskViewComponent,
    DefaultPublicWorkflowViewComponent,
    DefaultSimpleTaskViewComponent,
    DefaultSingleTaskViewComponent,
    RoleAssignmentComponent,
    WorkflowViewComponent
} from '@netgrif/components';
import {ProfileComponent} from "./views/profile/profile.component";
import {SideNavAllCasesTabViewComponent} from "./views/side-nav/all-cases/side-nav-all-cases-tab-view.component";
import {SideNavMyCasesTabViewComponent} from "./views/side-nav/my-cases/side-nav-my-cases-tab-view.component";
import {SideNavMyTasksTaskViewComponent} from "./views/side-nav/my-tasks/side-nav-my-tasks-task-view.component";


@Injectable({
    providedIn: 'root'
})
export class TemplateFrontendViewService extends ViewService {
    constructor(configurationService: ConfigurationService, router: Router, loggerService: LoggerService) {
        // This class is managed by schematics. Avoid modifying it by hand.
        // If you want to add views to the application run the 'create-view' schematic.
        super([{id: 'RoleAssignmentComponent', class: RoleAssignmentComponent},
            {id: 'WorkflowViewComponent', class: WorkflowViewComponent},
            {id: 'DashboardComponent', class: DashboardComponent},
            {id: 'EmptyViewComponent', class: EmptyViewComponent},
            {id: 'AllTasks', class: SideNavAllTasksTaskViewComponent},
            {id: 'AllCasesTabView', class: SideNavAllCasesTabViewComponent},
            {id: 'MyTasks', class: SideNavMyTasksTaskViewComponent},
            {id: 'MyCasesTabView', class: SideNavMyCasesTabViewComponent},
            {id: 'SidenavComponent', class: SidenavComponent},
            {id: 'LoginComponent', class: LoginComponent},
            {id: 'DefaultSimpleTaskViewComponent', class: DefaultSimpleTaskViewComponent},
            {id: 'PublicSingleTaskViewComponent', class: DefaultSingleTaskViewComponent},
            {id: 'PublicTaskViewComponent', class: DefaultPublicTaskViewComponent},
            {id: 'PublicWorkflowViewComponent', class: DefaultPublicWorkflowViewComponent},
            {id: 'PublicResolverComponent', class: DefaultPublicResolverComponent},
            {id: 'ProfileComponent', class: ProfileComponent},
        ], configurationService, router, loggerService);
    }
}
