import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../service/todo/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private _TodoService: TodoService) { }

  @Input() todo;
  @Output() updateTodoList: EventEmitter<any> = new EventEmitter<any>();
  private edit: boolean = false;
  private showDeleteConfirm: boolean = false;
  private urgencyArray = [
    {
      name: 'veryUrgent',
      text: 'Very urgent'
    },
    {
      name: 'urgent',
      text: 'Urgent'
    },
    {
      name: 'middle',
      text: 'Middle'
    },
    {
      name: 'low',
      text: 'Low'
    }
  ];

  ngOnInit() {}

  taskDone(taskId) {
    var todo = this.todo.tasks.forEach(task => {
      if (task._id === taskId) {
        task.done = !task.done;
        this.updateTodo(this.todo);
      }
    });
  }

  updateTodo(body) {
    this._TodoService.updateTodo(body, body._id).subscribe(
      data => {
        this.updateTodoList.emit();
      },
      err => console.log(err)
    );
  }

  updateTodoTitle(event) {
    this.todo.title = event.srcElement.value;
  }

  updateTodoInput(event, id) {
    this.todo.tasks.forEach(task => {
      if (task._id === id) {
        task.task = event.srcElement.value;
      }
    });
  }

  editTodo() {
    this.edit = !this.edit;
  }

  editTodoCancel() {
    this.editTodo();
    this.updateTodoList.emit();
  }

  editTodoDone(event) {
    this.editTodo();
    let form = event.srcElement.parentElement;
    let urgency = form.querySelector('select').value;
    this.todo.urgency = urgency;
    this.updateTodo(this.todo);
  }

  deleteTodoConfirmShow() {
    this.showDeleteConfirm = !this.showDeleteConfirm;
  }

  deleteTodo(id) {
    this._TodoService.deleteTodo(id).subscribe(
      body => {
        this.updateTodoList.emit();
        this.deleteTodoConfirmShow();
      },
      err => console.log(err)
    );
  }
}
