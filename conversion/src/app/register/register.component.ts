import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm=new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl()

  })

  createAccount(){
    console.log(this.regForm.value);
    
  }

}
