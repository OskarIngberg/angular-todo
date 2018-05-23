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

  getTodosFromUrgency(todos, urgency) {
    let array = [];

    todos.forEach(todo => {
      if (todo.urgency === urgency) {
        array.push(todo);
      }
    });

    return array;
  }

  updateTodosOrder(todoInput, user, direction) {
    let todosArray;

    this.getTodos(user).subscribe(
      todos => {
        todosArray = this.getTodosFromUrgency(todos, todoInput.urgency);

        todosArray.forEach(todo => {
          if (direction === 'up') {
            if (todo.order === todoInput.order - 1) {
              todo.order++;
            }
          }

          if (direction === 'down') {
            if (todo.order === todoInput.order + 1) {
              todo.order--;
            }
          }

          this.updateTodo(todo, todo._id);
        });
      },
      error => console.log(error)
    );
  }
}
