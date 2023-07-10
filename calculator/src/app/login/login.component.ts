import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })

  authenticate(){
    console.log(this.loginForm.value);
    
  }

get username(){
  return this.loginForm.get("username")
}

get password(){
  return this.loginForm.get("password")
}

}
