import { Component, Input, OnInit } from '@angular/core';
import students from "../../students"

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
  students:{name:string,age:number}[]=[]
  constructor() {this.students=students }
  ngOnInit(): void {
  }

}
