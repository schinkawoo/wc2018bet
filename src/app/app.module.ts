import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { StandingsComponent } from './routes/standings/standings.component';
import { KnockoutComponent } from './routes/knockout/knockout.component';
import { GroupsComponent } from './routes/groups/groups.component';
import { RouteComponent } from './routes/route';
import { AuthLoginDialogComponent } from './auth-login-dialog/auth-login-dialog.component';
import { AuthLogoutDialogComponent } from './auth-logout-dialog/auth-logout-dialog.component';
import { AuthLoginButtonComponent } from './auth-login-button/auth-login-button.component';
import { AuthRegisterDialogComponent } from './auth-register-dialog/auth-register-dialog.component';
import { InfoComponent } from './routes/info/info.component';
import { MyPageComponent } from './routes/my-page/my-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ToolbarComponent,
    HomeComponent,
    StandingsComponent,
    KnockoutComponent,
    GroupsComponent,
    AuthLoginDialogComponent,
    AuthLogoutDialogComponent,
    AuthLoginButtonComponent,
    AuthRegisterDialogComponent,
    InfoComponent,
    MyPageComponent,
  ],
  entryComponents: [AuthLoginDialogComponent, AuthLogoutDialogComponent, AuthRegisterDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
