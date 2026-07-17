import {Component, OnInit} from '@angular/core';
import {
    CaseResourceService,
    CaseSearchRequestBody,
    DoubleDrawerUtils, DynamicNavigationRouteProviderService, encodeBase64, GroupNavigationConstants,
    LoggerService,
    NAE_VIEW_ID_SEGMENT, PaginationParams, SimpleFilter,
    SnackBarService,
    User,
    UserService,
    ViewIdService
} from '@netgrif/components-core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HttpParams} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
        {
            provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'login'
        },
        ViewIdService,
    ]
})
export class LoginComponent implements OnInit {

    constructor(private router: Router,
                private _userService: UserService,
                private _snackbar: SnackBarService,
                private _translate: TranslateService,
                private _log: LoggerService,
                private _caseResourceService: CaseResourceService,
                protected _dynamicRoutingService: DynamicNavigationRouteProviderService) {
    }

    ngOnInit(): void {
        if (this._userService.user.id.length !== 0) {
            this.redirectToHome();
        }
    }

    onLogin(user: User) {
        if (user && user.id) {
            this.redirectToHome();
        } else {
            this._snackbar.openErrorSnackBar(this._translate.instant('forms.login.wrongCredentials'));
        }
    }

    private redirectToHome() {
        const searchBody: CaseSearchRequestBody = {
            data: {
                [GroupNavigationConstants.ITEM_FIELD_ID_NODE_PATH] : "/default-menu-item/all-cases"
            },
            process: {identifier: "menu_item"}
        };

        let httpParams = new HttpParams()
            .set(PaginationParams.PAGE_SIZE, 1)
            .set(PaginationParams.PAGE_NUMBER, 0);
        this._caseResourceService.searchCases(SimpleFilter.fromCaseQuery(searchBody), httpParams).subscribe(page => {
            if (page?.pagination?.totalElements === 0) {
                this.router.navigate(['/']).then((value) => {
                    this._log.debug('Routed to blank view');
                });
            } else {
                const url = this._dynamicRoutingService.route;
                this.router.navigate([`/${url}/${encodeBase64(page.content[0].stringId)}`]).then((value) => {
                    this._log.debug('Routed to All cases');
                });
            }
        });

    }
}
