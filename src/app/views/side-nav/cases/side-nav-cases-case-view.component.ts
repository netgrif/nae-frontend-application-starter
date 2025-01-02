import {AfterViewInit, Component, Optional, ViewChild} from '@angular/core';
import {
    AbstractCaseViewComponent,
    AllowedNetsService,
    AllowedNetsServiceFactory,
    Case,
    CaseViewService,
    CategoryFactory,
    defaultCaseSearchCategoriesFactory,
    NAE_BASE_FILTER,
    NAE_SEARCH_CATEGORIES,
    NAE_VIEW_ID_SEGMENT,
    OverflowService,
    SearchService,
    SimpleFilter,
    ViewIdService,
} from '@netgrif/components-core';
import {HeaderComponent} from '@netgrif/components';

const localAllowedNetsFactory = (factory: AllowedNetsServiceFactory) => {
    return factory.createWithAllNets();
};

const baseFilterFactory = () => {
    return {
        filter: SimpleFilter.emptyCaseFilter()
    };
};

@Component({
    selector: 'app-side-nav-cases-case-view',
    templateUrl: './side-nav-cases-case-view.component.html',
    styleUrls: ['./side-nav-cases-case-view.component.scss'],
    providers: [
        CategoryFactory,
        CaseViewService,
        SearchService,
        OverflowService,
        {
            provide: NAE_BASE_FILTER,
            useFactory: baseFilterFactory
        },
        {
            provide: AllowedNetsService,
            useFactory: localAllowedNetsFactory,
            deps: [AllowedNetsServiceFactory]
        },
        {
            provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'cases'
        },
        ViewIdService,
        {provide: NAE_SEARCH_CATEGORIES, useFactory: defaultCaseSearchCategoriesFactory, deps: [CategoryFactory]},
    ],
})
export class SideNavCasesCaseViewComponent extends AbstractCaseViewComponent implements AfterViewInit {

    @ViewChild('header') public caseHeaderComponent: HeaderComponent;

    constructor(caseViewService: CaseViewService, @Optional() overflowService: OverflowService) {
        super(caseViewService, overflowService, undefined, {
            enableCaseTitle: true,
            isCaseTitleRequired: false,
            newCaseButtonConfig: {
                createCaseButtonTitle: 'New Case',
                createCaseButtonIcon: 'add_circle'
            }
        });

    }

    ngAfterViewInit(): void {
        this.initializeHeader(this.caseHeaderComponent);
    }

    public handleCaseClick(clickedCase: Case): void {
    }

}
