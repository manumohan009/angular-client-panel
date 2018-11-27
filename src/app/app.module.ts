import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    DashboardComponent,
    ClientDetailsComponent,
    ClientEditComponent,
    ClientAddComponent,
    SignupComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
