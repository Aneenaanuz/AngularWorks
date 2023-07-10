import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  
  result:number=0
  performDivision(b1:any,b2:any){
    let num1=+b1.value
    let num2=+b2.value
    this.result=num1/num2
  }

}
