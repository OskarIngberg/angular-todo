import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginCrudService {

  constructor(
    private http: HttpClient
  ) { }

  checkUserCredentials(username, password) {
    return this.http.get(`http://localhost:3000/user/${username}/${password}`);
  }
}
