import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../auth.service';
import { AuthLoginButtonComponent } from '../auth-login-button/auth-login-button.component';

@Component({
  selector: 'app-auth-logout-dialog',
  templateUrl: './auth-logout-dialog.component.html',
  styleUrls: ['./auth-logout-dialog.component.css']
})
export class AuthLogoutDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuthLoginButtonComponent>, private authService: AuthService) { }

  ngOnInit() {
  }

  confirm() {
    this.authService.logout()
      .then(() => {
        this.dialogRef.close({
          loggedOut: true
        });
      });
  }

  cancel() {
    this.dialogRef.close();
  }

}
