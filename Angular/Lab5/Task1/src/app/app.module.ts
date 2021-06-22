import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ErrorComponentComponent } from 'src/Components/error-component/error-component.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { MyNavBarComponent } from 'src/Components/my-nav-bar/my-nav-bar.component';
import { RegisterComponent } from 'src/Components/register/register.component';
import { StudentComponent } from 'src/Components/student/student.component';
import { TableStudentsComponent } from 'src/Components/table-students/table-students.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TableStudentsComponent,
    MyNavBarComponent,
    StudentComponent,
    ErrorComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
