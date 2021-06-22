import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from 'src/app/Components/error-component/error-component.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { RegisterComponent } from 'src/app/Components/register/register.component';
import { UserComponent } from 'src/app/Components/user/user.component';
import { UsersComponent } from 'src/app/Components/users/users.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'users/delete/:id', component: DeleteUserComponent },
  { path: 'users/details/:id', component: UserDetailsComponent },
  { path: 'users/edit/:id', component: EditUserComponent },
  { path: '**', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
