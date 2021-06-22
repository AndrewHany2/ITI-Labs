import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private MyClient:HttpClient) { 
  }
  baseUrL="https://jsonplaceholder.typicode.com/users"
  GetUsers(){
    return this.MyClient.get(this.baseUrL)
  }
  GetUserById(id:number){
    console.log(id)
    return this.MyClient.get(`${this.baseUrL}/${id}`)
  }
  AddNewUser(user:any){
    return this.MyClient.post(this.baseUrL,user);
  }
}
class User{
  name:string=""
  constructor(_name:string) {
    this.name=_name
  }
}
let us=new User("")
