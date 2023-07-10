import { Component } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent {

  result:any
  num:any
  performCube(){
    this.result=this.num**3
    
  }

}
