import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-preuve';
  num1:number = 0
  num2:number = 0
  reponGlobal:number=0
  resultatAdd(){
    this.reponGlobal=this.num1+this.num2

  }
  resultatSous(){
    this.reponGlobal=this.num1-this.num2

  }  
  resultatMulti(){
    this.reponGlobal=this.num1*this.num2

  }  
  resultatDiv(){
    this.reponGlobal=this.num1/this.num2

  }


}
