import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    this.userLogedIn = new BehaviorSubject<boolean>(false);
  }


  login(username, password) {
    if (username === 'test' && password === 'test') {
      this.userLogedIn.next(true);
      this.router.navigate(['/todos']);
    } else {
      this.userLogedIn.next(false);
    }
  }

  logout() {
    this.userLogedIn.next(false);
  }

  isLogedIn(): Observable<boolean> {
    return this.userLogedIn;
  }

  public getTheBoolean(): Observable<boolean> {
    return this.userLogedIn.asObservable();
}
}
