import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  textValue:string=""
  changeValue(){
    this.textValue="hello"
  }
}
