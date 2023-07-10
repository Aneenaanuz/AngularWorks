import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent {
  id:any
  employee:any
  constructor(private route:ActivatedRoute,private service:EmployeeService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    this.service.getEmployeeDetails(this.id).subscribe(res=>this.employee=res)
  }

  removeEmployee(id:any){
    this.service.deleteEmployee(this.id).subscribe(res=>this.router.navigateByUrl("employees"))
  }





}
