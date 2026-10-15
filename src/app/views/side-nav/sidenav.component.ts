import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
    Case,
    CaseResourceService,
    decodeBase64, DoubleDrawerNavigationService,
    DynamicNavigationRouteProviderService,
    GroupNavigationConstants, LoggerService,
    NAE_VIEW_ID_SEGMENT,
    ViewIdService
} from '@netgrif/components-core';
import {filter, take, combineLatest} from "rxjs";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    providers: [
        {
            provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'side-nav'
        },
        ViewIdService,
    ]
})
export class SidenavComponent {

    fixed: boolean;

    constructor() {
        this.fixed = true;
    }


    openStatusChanged($event) {
        console.log('Drawer status:');
        console.log($event);
    }
}
