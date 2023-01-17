import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AdditionComponent } from './addition/addition.component';
import { PrimeComponent } from './prime/prime.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SubtrationComponent } from './subtration/subtration.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { FactorialComponent } from './factorial/factorial.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AdditionComponent,
    PrimeComponent,
    NavComponent,
    SubtrationComponent,
    MultiplicationComponent,
    FactorialComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
