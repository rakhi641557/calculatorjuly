import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  result=0
  num1:number=0
  num2:number=0
  multiplynum(){
    this.result=this.num1*this.num2;
  }

}
