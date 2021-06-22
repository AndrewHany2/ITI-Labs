import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private MyClient: HttpClient) {}
  BaseUrl = 'http://localhost:3000/users';
  GetAllUsers() {
    return this.MyClient.get(this.BaseUrl);
  }
  GetUserById(id: number) {
    return this.MyClient.get(this.BaseUrl + '/' + id);
  }
  AddNewUser(user: any) {
    return this.MyClient.post(this.BaseUrl, user);
  }
  DeleteUser(id: number) {
    return this.MyClient.delete(this.BaseUrl + '/' + id);
  }
  UpdateUser(user: any) {
    return this.MyClient.put(this.BaseUrl + '/' + user.id, user);
  }
}
