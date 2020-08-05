import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  public loginStatus = new Subject<boolean>();

  constructor(private router: Router) {}

  login() {
    this.loggedIn = true;
    this.loginStatus.next(true);
    console.log('logged in');
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['auth']);
    console.log('logged out');
  }

  getLoginStatus(): boolean {
    return this.loggedIn;
  }
}
