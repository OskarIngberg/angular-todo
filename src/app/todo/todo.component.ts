import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() todos;

  ngOnInit() {}

  taskDone(todoId, taskId) {
    // console.log('TodoId: ', todoId);
    // console.log('TaksId: ', taskId);
    // this.todos.forEach(todo => {
    //   console.log(todo);
    //   if (todo.task._id === id) {
    //     todo.task.done = !todo.task.done;
    //   }
    // });
    var todo = this.todos.forEach(todo => {
      if (todo._id === todoId) {
        console.log(todo);
      }
    });
  }

}
