import { Component } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent {
  result:boolean=true
  num:number=0;

  primenum(){
    for(let i=2;i<this.num;i++)
    if(this.num%i==0){
    this.result=false
    break
    }
  }

}
