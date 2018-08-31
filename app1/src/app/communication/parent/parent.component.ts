import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 friendInfo
    recievedFriendInfo: any;

  constructor() { }

  ngOnInit() {
  }
    getData(obj){
        this.friendInfo=obj
            console.log(obj)

    }

    recieveData(event){
        console.log(event)
       this.recievedFriendInfo=event;
    }
}