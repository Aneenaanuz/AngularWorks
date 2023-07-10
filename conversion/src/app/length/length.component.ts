import { Component } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent {
  centi:number=0
  meterToCenti(b1:any){
    let meter=+b1.value
    this.centi=meter*100

  }

}
