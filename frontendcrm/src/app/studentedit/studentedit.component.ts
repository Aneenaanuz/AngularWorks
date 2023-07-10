import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ActivatedRoute,Router} from '@angular/router'
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent {

  studentForm=new FormGroup(
    {
    name:new FormControl("",Validators.required),
    course:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    contact:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required)
  })

  id:any
  constructor(private route:ActivatedRoute,private service:StudentService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    this.service.getStudentDetail(this.id).subscribe(res=>this.studentForm.patchValue(res))
  }

  changeStudent(){
    let formData=this.studentForm.value
    this.service.updateStudent(this.id,formData).subscribe(res=>this.router.navigateByUrl("students"))
  }

}
