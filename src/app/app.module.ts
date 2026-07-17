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
    BuilderModule,
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
import {SideNavCasesCaseViewComponent} from './views/side-nav/cases/side-nav-cases-case-view.component';
import {SideNavTasksTaskViewComponent} from './views/side-nav/tasks/side-nav-tasks-task-view.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import {ResizableModule} from 'angular-resizable-element';
import {PieChartModule} from '@swimlane/ngx-charts';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {
    BuilderTabbedCaseViewComponent
} from './views/builder-example/builder-tabbed-case-view/builder-tabbed-case-view.component';
import {BuilderTabsExampleComponent} from './views/builder-example/builder-tabs-example.component';
import {ProfileComponent} from "./views/profile/profile.component";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        BuilderTabbedCaseViewComponent,
        BuilderTabsExampleComponent,
        DashboardComponent,
        SidenavComponent,
        SideNavCasesCaseViewComponent,
        SideNavTasksTaskViewComponent,
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
        BuilderModule,
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
