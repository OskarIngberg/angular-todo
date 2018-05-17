import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs';

import { LoginCrudService } from './login-crud/login-crud.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private _LoginCrudService: LoginCrudService
  ) {
    this.userLogedIn = new BehaviorSubject<boolean>(false);
  }

  public login(username, password) {
    this._LoginCrudService.checkUserCredentials(username, password).subscribe(
      success => {
        if (success) {
          this.userLogedIn.next(true);
          this.router.navigate(['/todos']);
        } else {
          console.log('No user');
        }
      },
      error => console.log(error)
    );
  }

  public logout() {
    this.userLogedIn.next(false);
  }

  public isLogedIn(): Observable<boolean> {
    return this.userLogedIn;
  }

  public getTheBoolean(): Observable<boolean> {
    return this.userLogedIn.asObservable();
}
}
