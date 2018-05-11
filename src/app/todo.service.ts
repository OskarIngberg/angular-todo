import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { taskRoute } from './route.config'

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}
  
  getTodos() {
    return this.http.get(taskRoute);
  }

  postTodo(body) {
    return this.http.post(taskRoute, body);
  }
}