import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from 'src/Components/error-component/error-component.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { RegisterComponent } from 'src/Components/register/register.component';
import { StudentComponent } from 'src/Components/student/student.component';
import { TableStudentsComponent } from 'src/Components/table-students/table-students.component';


const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"register",component:RegisterComponent},  
                        {path:"students",component:TableStudentsComponent},
                        {path:"student/:id",component:StudentComponent},
                        {path:"**",component:ErrorComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
