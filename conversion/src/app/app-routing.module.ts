import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreetofarenComponent } from "./degreetofaren/degreetofaren.component"
import { TimeComponent } from './time/time.component';
import { LengthComponent } from './length/length.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"digreetofaren",component:DegreetofarenComponent},
  {path:"time",component:TimeComponent},
  {path:"length",component:LengthComponent},
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
