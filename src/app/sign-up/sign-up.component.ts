import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getUsers().subscribe(data=>{
      this.users = Object.assign(this.users, data);
    });
    this.newUser = new User(this.users.length, "Васильев Василий Васильевич", "vasiliev@mail.com", "dwsedw");
  }

  ngOnInit() {
  }

  private newUser: User;
  private users: any = [];

  private getUsers(){
    const url = 'assets/users.json';
    return this.http.get(url);
  }

  private signUpUser(){
    this.users.push({
      id: this.newUser.id, 
      name: this.newUser.name,
      email: this.newUser.email,
      password: this.newUser.password
    });
    console.log(this.users);
  }

}
