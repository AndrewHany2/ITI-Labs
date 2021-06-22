import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-table',
  templateUrl: './add-to-table.component.html',
  styleUrls: ['./add-to-table.component.css']
})
export class AddToTableComponent  {
  name:string=""
  age:number=0;
  get ValidateAge(){
    return this.age >18 && this.age <50
  }
  get ValidateName(){
    return this.name !==""
  }
  students:{name:String,age:number}[]=[];

  AddNewStudent(){
    if(this.ValidateAge && this.ValidateName){
      let student:{name:string,age:number}={name:this.name,age:this.age}
      this.students.push(student)
    }
  }
}
