import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  
  result:number=0
  performSubtraction(box1:any,box2:any){

    let num1=+box1.value
    let num2=+box2.value
    this.result=num1-num2
  }

}
