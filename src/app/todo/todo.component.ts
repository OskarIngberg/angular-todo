import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  title: string = 'Test';
  tasks = [
    { task: 'Test Task 1', done: false, id: 1 },
    { task: 'Test Task 2', done: false, id: 2 },
    { task: 'Test Task 3', done: false, id: 3 }
  ];

  ngOnInit() {
  }

  taskDone(id) {
    this.tasks.forEach(element => {
      if (element.id === id) {
        element.done = !element.done;
      }
    });
  }

}
