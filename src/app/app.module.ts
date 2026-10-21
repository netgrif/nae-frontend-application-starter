import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
    AuthenticationModule,
    ConfigurationService,
    DialogModule,
    MaterialModule,
    NAE_ASYNC_RENDERING_CONFIGURATION,
    TranslateLibModule,
    ViewService,
} from '@netgrif/components-core';
import {FlexLayoutModule, FlexModule} from '@ngbracket/ngx-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    AuthenticationComponentModule,
    CaseViewComponentModule,
    DashboardComponentModule,
    DialogComponentsModule,
    HeaderComponentModule,
    LoginFormComponentModule,
    NavigationComponentModule,
    PanelComponentModule,
    QuickPanelComponentModule,
    SearchComponentModule,
    SideMenuComponentModule,
    SideMenuContentComponentModule,
    SideMenuNewCaseComponentModule,
    TabsComponentModule,
    ToolbarComponentModule,
    UserComponentModule,
} from '@netgrif/components';
import {TemplateFrontendConfigurationService} from './template-frontend-configuration.service';
import {TemplateFrontendViewService} from './template-frontend-view.service';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {SideNavAllTasksTaskViewComponent} from './views/side-nav/all-tasks/side-nav-all-tasks-task-view.component';
import {SideNavMyTasksTaskViewComponent} from './views/side-nav/my-tasks/side-nav-my-tasks-task-view.component';
import {SideNavAllCasesTabViewComponent} from './views/side-nav/all-cases/side-nav-all-cases-tab-view.component';
import {SideNavAllCasesContent0TaskViewComponent} from './views/side-nav/all-cases/content/0/side-nav-all-cases-content0-task-view.component';
import {SideNavAllCasesContent1CaseViewComponent} from './views/side-nav/all-cases/content/1/side-nav-all-cases-content1-case-view.component';
import {SideNavMyCasesTabViewComponent} from './views/side-nav/my-cases/side-nav-my-cases-tab-view.component';
import {SideNavMyCasesContent0TaskViewComponent} from './views/side-nav/my-cases/content/0/side-nav-my-cases-content0-task-view.component';
import {SideNavMyCasesContent1CaseViewComponent} from './views/side-nav/my-cases/content/1/side-nav-my-cases-content1-case-view.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import {ResizableModule} from 'angular-resizable-element';
import {PieChartModule} from '@swimlane/ngx-charts';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ProfileComponent} from "./views/profile/profile.component";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        SidenavComponent,
        SideNavAllTasksTaskViewComponent,
        SideNavMyTasksTaskViewComponent,
        SideNavAllCasesTabViewComponent,
        SideNavAllCasesContent0TaskViewComponent,
        SideNavAllCasesContent1CaseViewComponent,
        SideNavMyCasesTabViewComponent,
        SideNavMyCasesContent0TaskViewComponent,
        SideNavMyCasesContent1CaseViewComponent,
        EmptyViewComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FlexModule,
        MaterialModule,
        FlexLayoutModule,
        AuthenticationModule,
        SideMenuComponentModule,
        AuthenticationComponentModule,
        TranslateLibModule,
        LoginFormComponentModule,
        ToolbarComponentModule,
        NavigationComponentModule,
        HeaderComponentModule,
        PanelComponentModule,
        CaseViewComponentModule,
        SearchComponentModule,
        QuickPanelComponentModule,
        TabsComponentModule,
        SideMenuNewCaseComponentModule,
        DashboardComponentModule,
        ResizableModule,
        UserComponentModule,
        PieChartModule,
        CommonModule,
        DialogModule,
        DialogComponentsModule,
        SideMenuContentComponentModule
    ],
    providers: [
        {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
        {provide: ViewService, useClass: TemplateFrontendViewService},
        {
            provide: NAE_ASYNC_RENDERING_CONFIGURATION, useValue: {
                batchSize: 20,
                batchDelay: 50,
                numberOfPlaceholders: 4,
                enableAsyncRenderingForNewFields: true,
                enableAsyncRenderingOnTaskExpand: true
            }
        },],
    bootstrap: [AppComponent]
})
export class AppModule {
}
