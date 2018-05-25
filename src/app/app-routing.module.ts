import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { StandingsComponent } from './routes/standings/standings.component';
import { GroupsComponent } from './routes/groups/groups.component';
import { KnockoutComponent } from './routes/knockout/knockout.component';
import { InfoComponent } from './routes/info/info.component';
import { AuthGuardService } from './auth-guard.service';
import { MyPageComponent } from './routes/my-page/my-page.component';
import { SetupPageComponent } from './routes/setup-page/setup-page.component';
import { AuthAdminGuardService } from './auth-admin-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'World Cup 2018 Betting' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'standings',
    component: StandingsComponent,
    data: { title: 'Standings' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'groups',
    component: GroupsComponent,
    data: { title: 'Group Phase' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'knockout',
    component: KnockoutComponent,
    data: { title: 'Knockout Phase' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'my-page',
    component: MyPageComponent,
    data: { title: 'My Page' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'setup-page',
    component: SetupPageComponent,
    data: { title: 'Setup' },
    canActivate: [AuthGuardService, AuthAdminGuardService]
  },
  {
    path: 'info',
    component: InfoComponent,
    data: { title: 'Not Logged In' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { title: '' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
