import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

  employeeForm=new FormGroup({
    name:new FormControl("",Validators.required),
    position:new FormControl("",Validators.required),
    salary:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    contact:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required) 
  })

  id:any
  constructor(private route:ActivatedRoute,private service:EmployeeService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    this.service.getEmployeeDetails(this.id).subscribe(res=>this.employeeForm.patchValue(res))

  }

  changeEmployee(){
    let formData=this.employeeForm.value
    this.service.updateEmployee(this.id,formData).subscribe(res=>this.router.navigateByUrl("employees"))
  }
}
