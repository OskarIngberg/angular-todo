import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs';

import { LoginCrudService } from './login-crud/login-crud.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogedIn: BehaviorSubject<boolean>;
  private username: BehaviorSubject<string>;

  constructor(
    private router: Router,
    private _LoginCrudService: LoginCrudService
  ) {
    this.userLogedIn = new BehaviorSubject<boolean>(false);
    this.username = new BehaviorSubject<string>('');
  }

  public login(username, password) {
    this._LoginCrudService.checkUserCredentials(username, password).subscribe(
      success => {
        if (success) {
          this.userLogedIn.next(true);
          this.username.next(username);
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
    this.username.next('');
  }

  public isLogedIn(): Observable<boolean> {
    return this.userLogedIn;
  }

  public getTheBoolean(): Observable<boolean> {
    return this.userLogedIn.asObservable();
  }

  public getUsername(): Observable<string> {
    return this.username.asObservable();
  }
}
