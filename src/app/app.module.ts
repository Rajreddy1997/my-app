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
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon1Component } from './amazon1/amazon1.component';
import { Amazon2Component } from './amazon2/amazon2.component';
import { Amazon3Component } from './amazon3/amazon3.component';
import { Amazon4Component } from './amazon4/amazon4.component';
import { TodoComponent } from './todo/todo.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';

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
    ViewAccountComponent,
    CreateUserComponent,
    StudentdetailsComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CalcultorComponent,
    TextareaComponent,
    SiblingComponent,
    Sibling1Component,
    Sibling2Component,
    AmazonComponent,
    Amazon1Component,
    Amazon2Component,
    Amazon3Component,
    Amazon4Component,
    TodoComponent,
    Todo1Component,
    Todo2Component,
    Todo3Component,
    CapitalDirective,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
