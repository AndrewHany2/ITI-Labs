import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import students from "../../students"

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  allowedToRender:boolean=false;
  id:number=0;
  name:string="";
  age:number=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    try {
      this.id=this.route.snapshot.params["id"]
      this.name=students[this.id].name
      this.age=students[this.id].age
      this.allowedToRender=true
    } catch (error) {
      this.allowedToRender=false
    }

  }
  

}
