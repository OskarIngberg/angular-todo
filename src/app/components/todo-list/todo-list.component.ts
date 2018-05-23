import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../service/todo/todo.service';
import { Observable } from 'rxjs';

import { LoginService } from '../../service/login-helper/login.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  username: string = '';

  constructor(
    private _TodoService: TodoService,
    private _LoginService: LoginService
  ) {
    this._LoginService.getUsername().subscribe(value => this.username = value);
  }

  public todos;
  public showTodos: boolean = false;

  ngOnInit() {
    this.getTodos();
  }

  updateTodoList() {
    this.getTodos();
  }

  getTodos() {
    this._TodoService.getTodos(this.username).subscribe(
      data => {
        this.todos = data

        if (this.todos.length > 0) {
          this.showTodos = true;
        } else {
          this.showTodos = false;
        }
      },
      err => console.error(err)
    );
  }
}
