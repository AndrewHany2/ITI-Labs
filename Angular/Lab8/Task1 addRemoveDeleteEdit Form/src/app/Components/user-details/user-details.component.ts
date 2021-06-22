import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UsersService,private route:ActivatedRoute) { }
  user:any;
  ngOnInit(): void {
    let id = this.route.snapshot.params.id
    this.userService.GetUserById(id).subscribe((res)=>{
      this.user=res
    })
  }

}
