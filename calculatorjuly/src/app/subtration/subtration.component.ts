import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-subtration',
  templateUrl: './subtration.component.html',
  styleUrls: ['./subtration.component.css']
})
export class SubtrationComponent {

  constructor(private service:CalcService) { }
  
  result=0
  num1:number=0
  num2:number=0
  substractnumber(){
    this.result=this.num1-this.num2
    let data={
      "num1":this.num1,
      "num2":this.num2
    }
    this.service.performSubtraction(data).then(res=>res.json()).then(data=>this.result=data.Result)
  }
}
