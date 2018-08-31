import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  sendData=new Subject

  constructor() { }
  
  transferData(obj){
    this.sendData.next(obj)
  }
}
