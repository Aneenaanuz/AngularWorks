import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { MovieService } from '../service/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:MovieService,private router:Router){

  }
  
  loginForm=new FormGroup({
    "username":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  })

  signIn(){
    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      let formData=this.loginForm.value
      this.service.authenticate(formData).subscribe((res:any)=>{
        let apikey="Token "+res.token
        localStorage.setItem("token",apikey)
        this.router.navigateByUrl("movies")

      })     
    }
    else{
      alert("invalid input")
    }
  }
}