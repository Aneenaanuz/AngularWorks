import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  
  minutes:number=0
  timeconversion(b1:any){
    let second=+b1.value
    this.minutes=second/60
  }

}
