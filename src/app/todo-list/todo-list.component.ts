import { Component, OnInit } from '@angular/core';
import { GetTodoService } from '../get-todo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _getTodo: GetTodoService) { }

  public tasks;

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._getTodo.getTodos().subscribe(
      data => { this.tasks = data},
      err => console.error(err),
      () => console.log('done loading todos')
    );
  }
}
