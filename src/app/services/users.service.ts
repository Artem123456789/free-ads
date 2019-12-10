import { Injectable } from '@angular/core';
import { User } from '../classes/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { 
    this.fetchUsers().subscribe(data=>{
      this._users = Object.assign(this._users, data);
    });
  }

  private _users: any = [];

  private fetchUsers(){
    const url = 'assets/users.json';
    return this.http.get(url);
  }

  public get users(){
    return this._users;
  }

  public signUpUser(newUser: User){
    this._users.push({
      id: newUser.id, 
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    });
    console.log(this._users);
  }

}
