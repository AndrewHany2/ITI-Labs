import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private MyRoute:ActivatedRoute,private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.userService.DeleteUser(this.MyRoute.snapshot.params.id).subscribe(()=>{
      this.router.navigateByUrl("users")
    })
  }


}
