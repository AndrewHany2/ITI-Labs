import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ErrorComponentComponent } from 'src/app/Components/error-component/error-component.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { MyNavBarComponent } from 'src/app/Components/my-nav-bar/my-nav-bar.component';
import { RegisterComponent } from 'src/app/Components/register/register.component';
import { UserComponent } from 'src/app/Components/user/user.component';
import { UsersComponent } from 'src/app/Components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './Components/user-item/user-item.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MyNavBarComponent,
    ErrorComponentComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserItemComponent,
    DeleteUserComponent,
    UserDetailsComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
