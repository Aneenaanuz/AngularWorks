import { Component } from '@angular/core';

@Component({
  selector: 'app-degreetofaren',
  templateUrl: './degreetofaren.component.html',
  styleUrls: ['./degreetofaren.component.css']
})
export class DegreetofarenComponent {
  
  faren:number=0
  convertDigreeToFaren(b1:any){
    let digree=+b1.value
    this.faren=digree*9/5 + 32 

  }

}
