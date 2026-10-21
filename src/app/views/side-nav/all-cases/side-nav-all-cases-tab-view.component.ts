import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavAllCasesContent0TaskViewComponent} from './content/0/side-nav-all-cases-content0-task-view.component';
import {SideNavAllCasesContent1CaseViewComponent} from './content/1/side-nav-all-cases-content1-case-view.component';


@Component({
    selector: 'app-side-nav-all-cases-tab-view',
    templateUrl: './side-nav-all-cases-tab-view.component.html',
    styleUrls: ['./side-nav-all-cases-tab-view.component.scss'],
    providers: [
        {
            provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'all-cases'
        },
        ViewIdService,
    ]
})
export class SideNavAllCasesTabViewComponent {

    tabs = [
        {
            label: {
                icon: 'storage',
                text: 'All Cases',
            },
            canBeClosed: false,
            tabContentComponent: SideNavAllCasesContent1CaseViewComponent,
            order: -2,
            injectedObject: {
                tabViewComponent: SideNavAllCasesContent0TaskViewComponent,
                tabViewOrder: 0
            }
        },
    ];

}
