import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../classes/user/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UsersService]
})
export class SignUpComponent implements OnInit {

  constructor(private usersService: UsersService) {
    this.newUser = new User(0, "Васильев Василий Васильевич", "vasiliev@mail.com", "dwsedw");
  }

  ngOnInit() {
  }

  private newUser: User;

  private signUpUser(){
    this.usersService.signUpUser(this.newUser);
  }

}
