import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SubtrationComponent } from './subtration/subtration.component';

const routes: Routes = [
  {path:"add",component:AdditionComponent},
  {path:"sub",component:SubtrationComponent},
  {path:"mul",component:MultiplicationComponent},
  {path:"login",component:SigninComponent},
  {path:"register",component:SignupComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
