import { Component, OnInit } from '@angular/core';
import { CreateAccountService } from '../../service/create-account-helper/create-account.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    private _CreateAccountService: CreateAccountService
  ) { }

  ngOnInit() {
  }

  createAccount(event) {
    const form = event.srcElement.parentElement;
    const username = form.querySelector('[name="username"]').value;
    const password = form.querySelector('[name="password"]').value;

    this._CreateAccountService.createAccount(username, password).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
