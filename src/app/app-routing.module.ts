import { SettingsComponent } from './settings/settings.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client/add', component: ClientAddComponent },
  { path: 'client/edit', component: ClientEditComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
