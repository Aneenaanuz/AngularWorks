import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { EmployeeService } from '../service/employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {

  constructor(private service:EmployeeService,private router:Router){

  }

  employeeForm=new FormGroup({
    name:new FormControl("",Validators.required),
    position:new FormControl("",Validators.required),
    salary:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    contact:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required) 
  })

  createEmployee(){
    // console.log(this.employeeForm.value);
    let formData=this.employeeForm.value
    if(this.employeeForm.valid){
      this.service.createEmployee(formData).subscribe(res=>this.router.navigateByUrl("employees"))
    }
    else{
      alert("invalid")
    }
    
  }

}
