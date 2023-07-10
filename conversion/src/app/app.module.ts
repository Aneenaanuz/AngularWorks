import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DegreetofarenComponent } from './degreetofaren/degreetofaren.component';
import { TimeComponent } from './time/time.component';
import { LengthComponent } from './length/length.component';
import { AreaComponent } from './area/area.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    DegreetofarenComponent,
    TimeComponent,
    LengthComponent,
    AreaComponent,
    LoginComponent,
    RegisterComponent
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
