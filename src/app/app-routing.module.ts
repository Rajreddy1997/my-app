import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { FilpkartpageComponent } from './filpkartpage/filpkartpage.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentIdCardComponent } from './student-id-card/student-id-card.component';
import { AuthenticationGuard } from './authentication.guard';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewAccountComponent } from './view-account/view-account.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    { path:'vehicles',component:VehiclesComponent},
    {path:'account',component:AccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'filpkartpage', component:FilpkartpageComponent},
    {path:'mail',component:MailComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'student_id_card',component:StudentIdCardComponent},
    {path:'view-vehicle/:id',component:ViewVehicleComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'view-account/:id',component:ViewAccountComponent}, 
    {path:'edit-account/:id',component:CreateAccountComponent},

   {path:'',component:WelcomeComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
