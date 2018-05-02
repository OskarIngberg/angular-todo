import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetTodoService {

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('localhost:4200/taks');
  }

}
