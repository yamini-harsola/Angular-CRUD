import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
angular :String="Welcome to Angular"
angular2;
person :any= {fname:"SONAM",
lname: "GUPTA "}
  constructor() { }

  ngOnInit() {
    this.angular2="I am from Angular 2 word "

  }
}