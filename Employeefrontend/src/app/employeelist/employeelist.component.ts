import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  employees:any
  constructor(private service:EmployeeService){
    this.service.getAllEmployee().subscribe(res=>this.employees=res)

  }

}
