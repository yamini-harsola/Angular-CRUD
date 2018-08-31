import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/parallelComponents/employee/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.sendData.subscribe(response=>{console.log(response)})

  }

}
