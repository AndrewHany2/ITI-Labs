import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allowedToRender:boolean=false;
  id:number=0;
  name:string="";
  age:number=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


  }
  

}
