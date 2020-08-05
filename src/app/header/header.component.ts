import { Component, OnInit, OnChanges } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

// import { MaterialModule } from '../core/material/material.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  mediaSub: Subscription;
  isDeviceXs: boolean;
  isLoggedIn: boolean;
  loginStatusSub: Subscription;

  constructor(
    private mediaObserver: MediaObserver,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {
    this.loginStatusSub = this.authSrv.loginStatus.subscribe((status) => {
      if (status) {
        this.isLoggedIn = true;
      }
    });

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.isDeviceXs = result.mqAlias === 'xs' ? true : false;
        console.log(result.mqAlias);
        console.log('isDeviceXs?: ' + this.isDeviceXs);
      }
    );
  }
  ngOnChanges() {
    this.isLoggedIn = this.authSrv.getLoginStatus();
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
    this.loginStatusSub.unsubscribe();
  }

  onLogin() {
    this.authSrv.login();
    this.isLoggedIn = this.authSrv.getLoginStatus();
  }

  onLogout() {
    this.authSrv.logout();
    this.isLoggedIn = this.authSrv.getLoginStatus();
  }
}
