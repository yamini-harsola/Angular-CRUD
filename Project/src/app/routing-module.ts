import { Routes, RouterModule } from "@angular/router";
import { NgModel } from "@angular/forms";
import { MainComponent } from "./main/main.component";
import { EditComponent } from './edit/edit.component';

const routes :Routes =[
    {path:'',component:MainComponent},
    {path:'edit', component : EditComponent}
]
@NgModel({
    RouterModule.forRoot(appRoutes)
})

export class RoutingModule{

}
