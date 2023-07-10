import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {path:"employees",component:EmployeelistComponent},
  {path:"employee-add",component:CreateemployeeComponent},
  {path:"employees/:id",component:EmployeedetailComponent},
  {path:"employee-edit/:id",component:EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
