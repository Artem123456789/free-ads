import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user/user';
import { UsersService } from '../services/users.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { 
    this.loginUser = new User();
    this.loginUser.email = "ivanov@example.com";
    this.loginUser.password = "passwordIvan0";
    this.showLogin = false;
  }

  ngOnInit() {
  }

  private loginUser: User;
  private showLogin: boolean;
  private loginResult: boolean;
  private loginText: string;

  private login() {
    this.showLogin = true;
    this.loginResult = this.usersService.loginUser(this.loginUser);
    this.loginText = this.loginResult ? 'Авторизация успешна!' : 'Аккаунта с таким логином и паролем нет';
  }

}
