import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';
import { AuthLoginButtonComponent } from '../auth-login-button/auth-login-button.component';

@Component({
  selector: 'app-auth-register-dialog',
  templateUrl: './auth-register-dialog.component.html',
  styleUrls: ['./auth-register-dialog.component.css']
})
export class AuthRegisterDialogComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  reference = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<AuthLoginButtonComponent>) { }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  register(): void {
    this.dialogRef.close('CONFIRM');
  }

  getEmailErrorMessage() {
    return this.email.dirty && this.email.touched && this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getNameErrorMessage() {
    return this.getFieldEmptyErrorMessage(this.name);
  }

  getReferenceErrorMessage() {
    return this.getFieldEmptyErrorMessage(this.reference);
  }

  getPasswordErrorMessage() {
    return this.getFieldEmptyErrorMessage(this.password);
  }

  getFieldEmptyErrorMessage(field) {
    return field.touched && field.hasError('required') ? 'You must enter a value' : '';
  }

}
