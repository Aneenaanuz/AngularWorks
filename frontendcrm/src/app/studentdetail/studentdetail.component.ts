import { Component } from '@angular/core';
//step 1 => extract queryparameter using snapshots
import {ActivatedRoute,Router} from '@angular/router';
import { StudentService} from '../service/student.service';


@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent {
  id:any
  student:any
  constructor(private route:ActivatedRoute,private service:StudentService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    // console.log(this.id);
    this.service.getStudentDetail(this.id).subscribe(res=>this.student=res)
    
  }

  removeStudent(id:any){
    this.service.deleteStudent(id).subscribe(res=>this.router.navigateByUrl("students"))
    
  }
  

}
