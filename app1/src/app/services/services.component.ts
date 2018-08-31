import { Component, OnInit } from '@angular/core';
import { FriendService } from "src/app/friend.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private friendService:FriendService) { }

  ngOnInit() {
  }
  sayHello(){
    this.friendService.sayHello()

  }

}
