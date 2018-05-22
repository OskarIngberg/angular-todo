import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { taskRoute } from '../../config/apiRoute.config';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}
  
  getTodos(user) {
    return this.http.get(`${taskRoute}/${user}`);
  }

  postTodo(body) {
    return this.http.post(taskRoute, body);
  }

  updateTodo(body, id) {
    return this.http.put(`${taskRoute}/${id}`, body);
  }

  deleteTodo(id) {
    return this.http.delete(`${taskRoute}/${id}`);
  }
}
