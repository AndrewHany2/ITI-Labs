import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:"register",component:RegisterComponent},  
                        {path:"users",component:UsersComponent},
                        {path:"users/:id",component:UserComponent},
                        {path:"**",component:ErrorComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
