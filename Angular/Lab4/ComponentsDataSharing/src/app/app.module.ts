import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from 'src/Components/register/register.component';
import { TableStudentsComponent } from 'src/Components/table-students/table-students.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TableStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
