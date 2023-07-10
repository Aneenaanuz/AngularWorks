
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdditionComponent} from "./addition/addition.component"
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { CubeComponent } from './cube/cube.component';
import { FactorialComponent } from './factorial/factorial.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:"add",component:AdditionComponent},
  {path:"sub",component:SubtractionComponent},
  {path:"multi",component:MultiplicationComponent},
  {path:"div",component:DivisionComponent},
  {path:"cube",component:CubeComponent},
  {path:"fact",component:FactorialComponent},
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"weather",component:WeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
