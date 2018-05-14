import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _TodoService: TodoService) {}

  public todos;

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._TodoService.getTodos().subscribe(
      data => this.todos = data,
      err => console.error(err)
    );
  }
}
