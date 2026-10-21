import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavMyCasesContent0TaskViewComponent} from './content/0/side-nav-my-cases-content0-task-view.component';
import {SideNavMyCasesContent1CaseViewComponent} from './content/1/side-nav-my-cases-content1-case-view.component';


@Component({
    selector: 'app-side-nav-my-cases-tab-view',
    templateUrl: './side-nav-my-cases-tab-view.component.html',
    styleUrls: ['./side-nav-my-cases-tab-view.component.scss'],
    providers: [
        {
            provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'my-cases'
        },
        ViewIdService,
    ]
})
export class SideNavMyCasesTabViewComponent {

    tabs = [
        {
            label: {
                icon: 'storage',
                text: 'My Cases',
            },
            canBeClosed: false,
            tabContentComponent: SideNavMyCasesContent1CaseViewComponent,
            order: -2,
            injectedObject: {
                tabViewComponent: SideNavMyCasesContent0TaskViewComponent,
                tabViewOrder: 0
            }
        },
    ];

}
