import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { HomeComponent } from './Components/home/home.component';
import { MyNavBarComponent } from './Components/my-nav-bar/my-nav-bar.component';
import { RegisterComponent } from './Components/register/register.component';
import { StudentComponent } from './Components/student/student.component';
import { TableStudentsComponent } from './Components/table-students/table-students.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import { DemoService } from './Services/demo.service';
import { CustomDirective } from './Directives/custom.directive';
import { UpperCasePipe } from './Pipes/upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TableStudentsComponent,
    MyNavBarComponent,
    StudentComponent,
    ErrorComponentComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    CustomDirective,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
