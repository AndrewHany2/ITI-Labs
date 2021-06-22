import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() addEvent=new EventEmitter();

  formGroup: any="";
  constructor() {  }
   ngOnInit() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      Age: new FormControl(Number, [
        Validators.required,
        Validators.min(18),
        Validators.max(50)
      ])
    });
  }
  name:string="";
  age:any="";
 onSubmit() {
    let student:any={name:this.name,age:this.age}
    this.addEvent.emit(student)
}
 addToTable(){

 }
}
