import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  data:any=[]


  constructor() { }

  ngOnInit() {
  }
  showData(){
    this.data=myData
  }
}
const myData=[
   {
        "fname": "Kyle",
        "lname": "Atkins",
        "tel": "(148)705-8508",
        "address": "919 At Ave",
        "city": "Hampstead",
        "state": "WI",
        "zip": 55466
    },
    {
        "fname": "Richelle",
        "lname": "Rodgers",
        "tel": "(671)630-0929",
        "address": "6107 Et Ct",
        "city": "Virginia Beach",
        "state": "DC",
        "zip": 56455
    },
    {
        "fname": "Ying",
        "lname": "Shanafelt",
        "tel": "(806)146-1275",
        "address": "9438 Sagittis Rd",
        "city": "Lakewood",
        "state": "GA",
        "zip": 70282
    },
    {
        "fname": "Brooks",
        "lname": "Staley",
        "tel": "(923)554-8210",
        "address": "429 Dolor Ave",
        "city": "Seattle",
        "state": "CT",
        "zip": 84194
    },
    {
        "fname": "Samir",
        "lname": "Craig",
        "tel": "(294)045-4076",
        "address": "517 Pulvinar Rd",
        "city": "Modesto",
        "state": "NJ",
        "zip": 43346
    },
    {
        "fname": "Luping",
        "lname": "Ortega",
        "tel": "(271)735-3180",
        "address": "8489 Nec Rd",
        "city": "Woodland Hills",
        "state": "FL",
        "zip": 87253
    },
    {
        "fname": "Gia",
        "lname": "Petti",
        "tel": "(474)497-7552",
        "address": "5606 Et Ave",
        "city": "Elmwood Park",
        "state": "NJ",
        "zip": 81624
    },
    {
        "fname": "Shanstella",
        "lname": "Debord",
        "tel": "(775)641-5442",
        "address": "1482 Tortor Dr",
        "city": "North Barrington",
        "state": "MT",
        "zip": 78869
    },
    {
        "fname": "Kosta",
        "lname": "Albright",
        "tel": "(672)863-1846",
        "address": "6310 Pretium Ln",
        "city": "Smithers",
        "state": "NH",
        "zip": 69522
    },
    {
        "fname": "Barkat",
        "lname": "Mckenzie",
        "tel": "(190)829-9597",
        "address": "4004 Neque Ave",
        "city": "Johnson City",
        "state": "MD",
        "zip": 56898
    }
]