import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login-helper/login.service';

@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(
    private _LoginService: LoginService
  ) {
    this._LoginService.isLogedIn().subscribe(value => this.loggedIn = value);
  }

  ngOnInit() {
  }

  logout(): void {
    this._LoginService.logout();
  }

}
