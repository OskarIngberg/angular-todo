import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-helper/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _LoginService: LoginService
  ) { }

  ngOnInit() {
  }

  login(event): void {
    const form = event.srcElement.parentElement;
    const username = form.querySelector('[name="username"]').value;
    const password = form.querySelector('[name="password"]').value;

    this._LoginService.login(username, password);
  }

}
