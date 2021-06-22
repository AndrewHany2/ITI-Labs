import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[]=[];
  constructor(private MyService:UsersService) { }
  ngOnInit(): void {
    this.MyService.GetAllUsers().subscribe(
      (res:any)=>{
        this.users=res
      },
      ()=>{

      }
    )
  }

}
