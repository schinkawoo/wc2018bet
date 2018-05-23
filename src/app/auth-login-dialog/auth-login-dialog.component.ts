import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthLoginButtonComponent } from '../auth-login-button/auth-login-button.component';

@Component({
  selector: 'app-auth-login-dialog',
  templateUrl: './auth-login-dialog.component.html',
  styleUrls: ['./auth-login-dialog.component.css']
})
export class AuthLoginDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loginError = '';

  constructor(
    public dialogRef: MatDialogRef<AuthLoginButtonComponent>, private authService: AuthService) { }

  cancel(): void {
    this.dialogRef.close();
  }

  login(): void {
    this.authService.login(this.email.value, this.password.value)
      .then((loginErrorMessage: string) => {
        if (!loginErrorMessage) {
          this.dialogRef.close({
            loggedIn: true
          });
        } else {
          this.loginError = loginErrorMessage;
        }
      });
  }

  register(): void {
    this.dialogRef.close({
      register: true
    });
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.dirty && this.email.touched && this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    // return this.password.touched && this.password.hasError('required') ? 'You must enter a value' : '';
  }

}
