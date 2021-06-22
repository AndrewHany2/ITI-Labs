import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private MyService:DemoService,private route: ActivatedRoute) { }
  user:any=""
  id:number=0
  ngOnInit(): void {
      this.id=this.route.snapshot.params["id"]
      this.MyService.GetUserById(this.id).subscribe((res)=>{
      this.user=res
      console.log(res)
    },
    ()=>{})
  }

}
