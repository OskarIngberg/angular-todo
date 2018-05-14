import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private _TodoService: TodoService) { }

  @Input() todo;
  @Output() updateTodoList: EventEmitter<any> = new EventEmitter<any>();
  private edit: boolean = false;
  private showDeleteConfirm: boolean = false;

  ngOnInit() {}

  taskDone(taskId) {
    var todo = this.todo.tasks.forEach(task => {
      if (task._id === taskId) {
        task.done = !task.done;
        this.updateTask(this.todo);
      }
    });
  }

  updateTask(body) {
    this._TodoService.updateTodo(body, body._id);
  }

  updateTodoTitle(event) {
    this.todo.title = event.srcElement.value;
  }

  updateTaskInput(event, id) {
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

  editTodoDone() {
    this.editTodo();
    this.updateTask(this.todo);
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
