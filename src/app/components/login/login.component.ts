import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login-helper/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  errorMessage: string;

  constructor(
    private _LoginService: LoginService
  ) { }

  ngOnInit() {
  }

  removeError(): void {
    this.error = false;
  }

  login(event): void {
    const form = event.srcElement.parentElement;
    const username = form.querySelector('[name="username"]').value;
    const password = form.querySelector('[name="password"]').value;

    if (username.length === 0 || password.length === 0) {
      this.error = true;
      this.errorMessage = 'Please fill out both fields';
    }

    if (!this.error) {
      if (!this._LoginService.login(username, password)) {
        this.error = true;
        this.errorMessage = 'Wrong password or username';
      }
    }
  }

}
