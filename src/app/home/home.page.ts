import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1: number = 0
  num2: number = 0
  reponGlobal: number = 0
  operaAdd(){
    this.reponGlobal = this.num1+this.num2
    return console.log(this.reponGlobal)
  }
  operaSous(){
    this.reponGlobal = this.num1-this.num2
    return console.log(this.reponGlobal)
  }
  operaMult(){
    this.reponGlobal = this.num1*this.num2
    return console.log(this.reponGlobal)
  }
  operaDiv(){
    this.reponGlobal = this.num1/this.num2
    return console.log(this.reponGlobal)
  }
  constructor() {}

}
