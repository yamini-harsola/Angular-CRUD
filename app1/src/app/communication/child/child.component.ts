import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Input } from "@angular/core";
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() friendData;
@Output() sendData = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }
  sendFriendInfo(obj){
  this.sendData.emit(obj)
    console.log(this.sendData)

}
data=[
  {
      "fname": "Arnisa",
      "lname": "Wrather",
      "tel": "(369)749-1812",
      "address": "2768 Placerat Dr",
      "city": "Canton",
      "state": "UT",
      "zip": 92741
  },
  {
      "fname": "Furdella",
      "lname": "Bowman",
      "tel": "(911)900-5776",
      "address": "4400 Amet Ave",
      "city": "Janesville",
      "state": "ND",
      "zip": 47698
  },
  {
      "fname": "LaDagea",
      "lname": "Kasprzak",
      "tel": "(883)246-3567",
      "address": "3808 Scelerisque Ct",
      "city": "Pond Eddy",
      "state": "TX",
      "zip": 70865
  },
  {
      "fname": "Darius",
      "lname": "Galvez",
      "tel": "(988)814-8815",
      "address": "812 Etiam Ln",
      "city": "Bellevue",
      "state": "GA",
      "zip": 89777
  },
  {
      "fname": "Ollie",
      "lname": "Blayne",
      "tel": "(449)052-3777",
      "address": "9683 Dolor Ln",
      "city": "Texas City",
      "state": "OR",
      "zip": 93031
  },
  {
      "fname": "Duane",
      "lname": "Band",
      "tel": "(727)005-7242",
      "address": "9338 Aliquam St",
      "city": "Fort Worth",
      "state": "NJ",
      "zip": 69430
  },
  {
      "fname": "Michelle",
      "lname": "Dabbs",
      "tel": "(691)752-6066",
      "address": "2701 Neque Ln",
      "city": "Hartford",
      "state": "AR",
      "zip": 98588
  },
  {
      "fname": "Karolis",
      "lname": "Baker",
      "tel": "(937)314-0517",
      "address": "2023 Mattis Ln",
      "city": "Mystic",
      "state": "MA",
      "zip": 44325
  },
  {
      "fname": "Deborah",
      "lname": "Oconnor",
      "tel": "(228)058-6672",
      "address": "6658 Sit Rd",
      "city": "Algonquin",
      "state": "GA",
      "zip": "73598"
  },
  {
      "fname": "Martie",
      "lname": "Dawson",
      "tel": "(660)153-4991",
      "address": "7932 Tortor Ct",
      "city": "Dinwiddie",
      "state": "DC",
      "zip": 57464
  }
]
}