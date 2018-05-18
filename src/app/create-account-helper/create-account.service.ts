import { Injectable, COMPILER_OPTIONS } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(username, password) {
    let body = {
      username,
      password
    }
    return this.http.post(`http://localhost:3000/user/${username}/${password}`, body);
  }
}
