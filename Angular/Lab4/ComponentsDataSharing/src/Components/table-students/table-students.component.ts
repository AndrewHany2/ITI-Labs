import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
  @Input() students:{name:string,age:number}[]=[]
  constructor() { }
  ngOnInit(): void {
  }

}
