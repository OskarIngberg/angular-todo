import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _TodoService: TodoService) {}

  public tasks;

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._TodoService.getTodos().subscribe(
      data => { this.tasks = data; console.log(this.tasks); },
      err => console.error(err)
    );
  }
}
