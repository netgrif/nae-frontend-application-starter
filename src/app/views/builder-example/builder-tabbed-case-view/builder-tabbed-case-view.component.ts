import {AfterViewInit, Component, Inject, Optional, ViewChild} from '@angular/core';
import {
    AbstractTabbedCaseViewComponent,
    AllowedNetsService,
    AllowedNetsServiceFactory,
    Case,
    CaseViewService,
    CategoryFactory,
    defaultCaseSearchCategoriesFactory,
    InjectedTabbedCaseViewData,
    LoggerService,
    NAE_BASE_FILTER,
    NAE_DEFAULT_HEADERS,
    NAE_SEARCH_CATEGORIES,
    NAE_TAB_DATA,
    OverflowService,
    SearchService,
    SimpleFilter,
    ViewIdService
} from '@netgrif/components-core';
import {HeaderComponent} from '@netgrif/components';

const baseFilterFactory = (injectedData: InjectedTabbedCaseViewData) => {
    return {filter: SimpleFilter.fromCaseQuery({process: {identifier: 'process'}})};
};

const localAllowedNetsFactory = (factory: AllowedNetsServiceFactory) => {
    return factory.createFromArray(['process']);
};

@Component({
    selector: 'app-tabbed-builder-case-view',
    templateUrl: './builder-tabbed-case-view.component.html',
    styleUrls: ['./builder-tabbed-case-view.component.scss'],
    providers: [
        CategoryFactory,
        CaseViewService,
        SearchService,
        OverflowService,
        ViewIdService,
        {
            provide: NAE_BASE_FILTER,
            useFactory: baseFilterFactory,
            deps: [NAE_TAB_DATA]
        },
        {
            provide: AllowedNetsService,
            useFactory: localAllowedNetsFactory,
            deps: [AllowedNetsServiceFactory]
        },
        {provide: NAE_SEARCH_CATEGORIES, useFactory: defaultCaseSearchCategoriesFactory, deps: [CategoryFactory]},
        {provide: NAE_DEFAULT_HEADERS, useValue: ['process-title', 'process-id', 'process-version', 'process-state']}
    ]
})
export class BuilderTabbedCaseViewComponent extends AbstractTabbedCaseViewComponent implements AfterViewInit {

    @ViewChild('header') public caseHeaderComponent: HeaderComponent;

    constructor(caseViewService: CaseViewService,
                loggerService: LoggerService,
                @Optional() overflowService: OverflowService,
                @Inject(NAE_TAB_DATA) injectedTabData: InjectedTabbedCaseViewData) {
        super(caseViewService, loggerService, injectedTabData, overflowService, undefined, undefined, {
            enableCaseTitle: false,
            isCaseTitleRequired: true,
            newCaseButtonConfig: {
                createCaseButtonTitle: 'New process',
                createCaseButtonIcon: 'home'
            }
        });
    }

    ngAfterViewInit(): void {
        super.initializeHeader(this.caseHeaderComponent);
    }

    protected openTab(openCase: Case) {
        this._injectedTabData.tabViewRef.openTab({
            label: {
                text: openCase.title,
                icon: openCase.icon ? openCase.icon : 'check_box'
            },
            canBeClosed: true,
            tabContentComponent: this._injectedTabData.tabViewComponent,
            injectedObject: {
                processCase: openCase
            },
            order: this._injectedTabData.tabViewOrder,
            parentUniqueId: this._injectedTabData.tabUniqueId
        }, this._autoswitchToTaskTab, this._openExistingTab);
    }

}
