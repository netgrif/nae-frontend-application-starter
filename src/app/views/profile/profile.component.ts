import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    ConfigurationService,
    LoggerService,
    SnackBarService,
    User,
    UserService
} from "@netgrif/components-core";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

    public user: User;
    protected subUser: Subscription;

    constructor(protected _userService: UserService,
                protected _router: Router,
                protected _log: LoggerService,
                protected _dialog: MatDialog,
                protected _http: HttpClient,
                protected _config: ConfigurationService,
                protected _snackBar: SnackBarService,
                protected _translate: TranslateService) {
    }

    ngOnDestroy(): void {
        this.subUser.unsubscribe();
    }

    ngOnInit(): void {
        this.user = this._userService.user;
        this.subUser = this._userService.user$.subscribe(user => {
            this.user = user;
        });
    }

}
