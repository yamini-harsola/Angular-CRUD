import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1 } from "src/app/comp1.component";
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { EventsComponent } from './events/events.component';
import { ChildComponent } from './communication/child/child.component';
import { ParentComponent } from './communication/parent/parent.component';
import { FriendService } from "src/app/friend.service";
import { ServicesComponent } from './services/services.component';
import { EmployeeComponent } from './parallelComponents/employee/employee.component';
import { EmployeeDetailsComponent } from './parallelComponents/employee-details/employee-details.component';
import { EmployeeService } from "src/app/parallelComponents/employee/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    Comp1,
    Comp2Component,
    Comp3Component,
    EventsComponent,
    ChildComponent,
    ParentComponent,
    ServicesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
