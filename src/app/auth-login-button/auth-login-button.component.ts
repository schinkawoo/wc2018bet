import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatButton } from '@angular/material';
import { AuthLoginDialogComponent } from '../auth-login-dialog/auth-login-dialog.component';
import { AuthLogoutDialogComponent } from '../auth-logout-dialog/auth-logout-dialog.component';
import { AuthRegisterDialogComponent } from '../auth-register-dialog/auth-register-dialog.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login-button',
  templateUrl: './auth-login-button.component.html',
  styleUrls: ['./auth-login-button.component.css']
})
export class AuthLoginButtonComponent implements OnInit {
  @ViewChild('loginButton') private loginButton: MatButton;
  label: string;
  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.setLabel();
  }

  authAction() {
    this.authService.isAuthenticated() ? this.openLogoutDialog() : this.openLoginDialog();
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(AuthLoginDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fixButtonRippleEffectBug();
      if (result && result.loggedIn === true) {
        this.setLabel();
        this.router.navigate(['']);
      } else if (result && result.register === true) {
        this.openRegisterDialog();
      }
    });
  }

  openLogoutDialog() {
    const dialogRef = this.dialog.open(AuthLogoutDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fixButtonRippleEffectBug();
      if (result && result.loggedOut === true) {
        this.setLabel();
        this.router.navigate(['info']);
      }
    });
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(AuthRegisterDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fixButtonRippleEffectBug();
      if (result && result === 'CONFIRM') {
        alert('Registration request received. We will need some time to process it. Please be patient.');
      }
    });
  }

  setLabel() {
    this.label = this.authService.isAuthenticated() ? 'Logout' : 'Login';
  }

  fixButtonRippleEffectBug() {
    this.loginButton._elementRef.nativeElement.classList.remove('cdk-program-focused');
    this.loginButton._elementRef.nativeElement.classList.add('cdk-mouse-focused');
  }

}
