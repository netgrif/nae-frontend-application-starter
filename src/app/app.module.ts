import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
    AuthenticationModule,
    ConfigurationService,
    MaterialModule,
    TranslateLibModule,
    ViewService,
} from '@netgrif/components-core';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    AuthenticationComponentModule,
    CaseViewComponentModule,
    DashboardComponentModule,
    HeaderComponentModule,
    ImportNetComponent,
    LoginFormComponentModule,
    NavigationComponentModule,
    NewCaseComponent,
    PanelComponentModule,
    QuickPanelComponentModule,
    RoleAssignmentComponent,
    SearchComponentModule,
    SideMenuComponentModule,
    SideMenuContentComponentModule,
    SideMenuNewCaseComponentModule,
    TabsComponentModule,
    ToolbarComponentModule,
    UserComponentModule,
    WorkflowViewComponent,
} from '@netgrif/components';
import {TemplateFrontendConfigurationService} from './template-frontend-configuration.service';
import {TemplateFrontendViewService} from './template-frontend-view.service';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {SideNavCasesCaseViewComponent} from './views/side-nav/cases/side-nav-cases-case-view.component';
import {SideNavTasksTaskViewComponent} from './views/side-nav/tasks/side-nav-tasks-task-view.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import {
    SideNavTabviewallcaseContent0TaskViewComponent
} from './views/side-nav/tabViewAllCase/content/0/side-nav-tabviewallcase-content0-task-view.component';
import {
    SideNavTabviewallcaseContent1CaseViewComponent
} from './views/side-nav/tabViewAllCase/content/1/side-nav-tabviewallcase-content1-case-view.component';
import {
    SideNavTabviewallcaseContent2CaseViewComponent
} from './views/side-nav/tabViewAllCase/content/2/side-nav-tabviewallcase-content2-case-view.component';
import {TabViewAllCaseComponent} from './views/side-nav/tabViewAllCase/tab-view-all-case.component';
import {ResizableModule} from 'angular-resizable-element';
import {PieChartModule} from '@swimlane/ngx-charts';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SidenavComponent,
        SideNavCasesCaseViewComponent,
        SideNavTasksTaskViewComponent,
        EmptyViewComponent,
        SideNavTabviewallcaseContent0TaskViewComponent,
        SideNavTabviewallcaseContent1CaseViewComponent,
        SideNavTabviewallcaseContent2CaseViewComponent,
        TabViewAllCaseComponent,
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
        MaterialModule,
        SideMenuContentComponentModule
    ],
    providers: [
        {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
        {provide: ViewService, useClass: TemplateFrontendViewService}
    ],
    bootstrap: [AppComponent],
    entryComponents: [NewCaseComponent, LoginComponent, SidenavComponent, SideNavCasesCaseViewComponent,
        SideNavTasksTaskViewComponent, EmptyViewComponent, SideNavTabviewallcaseContent0TaskViewComponent,
        SideNavTabviewallcaseContent1CaseViewComponent, SideNavTabviewallcaseContent2CaseViewComponent,
        TabViewAllCaseComponent, WorkflowViewComponent, ImportNetComponent, RoleAssignmentComponent]
})
export class AppModule {
}
