import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { FilpkartpageComponent } from './filpkartpage/filpkartpage.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentIdCardComponent } from './student-id-card/student-id-card.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewAccountComponent } from './view-account/view-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    VehiclesComponent,
    AccountsComponent,
    FlipkartComponent,
    FilpkartpageComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentIdCardComponent,
    ViewVehicleComponent,
    ViewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
