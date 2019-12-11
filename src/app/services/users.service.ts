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

  public signUpUser(newUser: User): void{
    this.users.push({
      id: this.users.length, 
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    });
    console.log(this.users);
  }

  public loginUser(logedUser: User): boolean{
    let userLoged: boolean = false;
    this.users.map(user=>{
      if((user.email == logedUser.email) && (user.password == logedUser.password)) userLoged = true;
    })
    return userLoged;
  }

}
