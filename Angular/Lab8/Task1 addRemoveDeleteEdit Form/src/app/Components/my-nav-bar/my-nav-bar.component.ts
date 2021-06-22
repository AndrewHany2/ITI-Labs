import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-nav-bar',
  templateUrl: './my-nav-bar.component.html',
  styles: [
  ]
})
export class MyNavBarComponent implements OnInit {
  students:{name:string,age:number}[]=[]
  constructor() {
  //   setInterval(()=>{
  //   this.students=students
  // },500)
}
  ngOnInit(): void {
  }
}
