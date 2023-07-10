import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  
  result:number=0
  performAddition(b1:any,b2:any){
    let num1=+b1.value
    let num2=+b2.value
    this.result=num1+num2
    
  }

}
