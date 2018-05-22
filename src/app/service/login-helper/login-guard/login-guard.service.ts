import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  isLogedIn: boolean = false;

  constructor(
    private router: Router,
    private _LoginService: LoginService
  ) {
    this._LoginService.isLogedIn().subscribe(value => this.isLogedIn = value);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLogedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
