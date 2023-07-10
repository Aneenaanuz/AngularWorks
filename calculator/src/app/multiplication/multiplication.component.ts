import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  
  result:number=0
  performMultiplication(b1:any,b2:any){
    let num1=+b1.value
    let num2=+b2.value
    this.result=num1*num2
  }

}
