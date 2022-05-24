import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';

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

    constructor(public routes: Router) {
    }

}
