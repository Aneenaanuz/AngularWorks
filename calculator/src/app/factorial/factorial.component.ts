import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {

  num1:any
  fact:number=1
  performFactorial(){
    this.fact=1
    for(let i=1;i<=this.num1;i++){
      this.fact*=i
    }
  }

}
