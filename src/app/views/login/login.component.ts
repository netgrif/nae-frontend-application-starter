import {Component, OnInit} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, SnackBarService, User, UserService, ViewIdService} from '@netgrif/components-core';
import {Router} from '@angular/router';

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

    constructor(private userService: UserService,
                private router: Router,
                private snackbar: SnackBarService) {
    }

    ngOnInit(): void {
        if (this.userService.user.id.length !== 0) {
            this.redirectToCases();
        }
    }

    onLogin(user: User) {
        console.log(user);
        if (user && user.id) {
            this.redirectToCases();
        } else {
            this.snackbar.openErrorSnackBar('Wrong credentials!');
        }
    }

    private redirectToCases() {
        this.router.navigate(['cases']).then((value) => {
            console.log('Routed to ' + value);
        });
    }

}
