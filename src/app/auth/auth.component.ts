import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isSignInMode: boolean = true;

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggleSignInButton() {
    this.isSignInMode = !this.isSignInMode;
  }

  onSignIn() {
    this.authSrv.login();
    console.log('sign in complete');
    this.router.navigate(['']);
  }

  onSignUp() {
    this.authSrv.login();
    console.log('sign up complete');
    this.router.navigate(['']);
  }

  onSubmit(value) {
    console.log(`Email: ${value.email}`);
    console.log(`Password: ${value.password}`);
    if (this.isSignInMode) {
      this.authSrv.login();
      this.router.navigate(['']);
    } else {
      console.log('sign up successful');
    }
  }
}
