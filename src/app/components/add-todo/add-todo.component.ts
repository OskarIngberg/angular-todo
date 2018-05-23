import { Component, OnInit, ElementRef, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../service/todo/todo.service';
import { LoginService } from '../../service/login-helper/login.service';

@Component({
  selector: 'add-todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  username: string = '';
  todos;

  constructor(
    private elementRef: ElementRef,
    private _TodoService: TodoService,
    private _LoginService: LoginService
  ) {
    this._LoginService.getUsername().subscribe(
      value => {
        this.username = value;
        this._TodoService.getTodos(this.username).subscribe(value => this.todos = value);
      },
      error => console.log(error)
    );
  }

  @Output() updateTodoList = new EventEmitter();

  numOfAddedTasks: number = 0;

  ngOnInit() {}

  addTask(): void {
    var tasksWrapper = this.elementRef.nativeElement.querySelector('#tasks');

    var newTaskWrapper = document.createElement('DIV');
    newTaskWrapper.classList.add('added-task');

    var newTaskInput = document.createElement('INPUT');
    newTaskInput.setAttribute('type', 'text');
    newTaskInput.setAttribute('placeholder', 'Task');
    newTaskInput.setAttribute('name', 'task');

    var removeTaskIcon = document.createElement('I');
    removeTaskIcon.classList.add('fas', 'fa-minus');
    removeTaskIcon.addEventListener('click', this.removeTask);

    newTaskWrapper.appendChild(newTaskInput);
    newTaskWrapper.appendChild(removeTaskIcon);
    tasksWrapper.appendChild(newTaskWrapper);

    this.numOfAddedTasks++;
  }

  removeTask(event): void {
    var elementToRemove = event.srcElement.parentElement;
    elementToRemove.remove();
    this.numOfAddedTasks--;
  }

  removeAllAddedTasks(addedTasks) {
    if (addedTasks > 0) {
      var tasksWrapper = this.elementRef.nativeElement.querySelector('#tasks');
      var addedTasks = tasksWrapper.querySelectorAll('.added-task');
      
      addedTasks.forEach(element => {
        element.remove();
      });
    };
  }

  addTodo(event): void {
    const form = event.srcElement.parentElement;
    const title = form.querySelector('[name="title"]');
    const tasks = form.querySelectorAll('[name="task"]');
    const urgency = form.querySelector('select');

    const getTodosFromUrgency = this._TodoService.getTodosFromUrgency(this.todos, urgency.value);

    let todo = {
      user: this.username,
      title: title.value,
      Created_date: Date.now(),
      urgency: urgency.value,
      tasks: [],
      order: getTodosFromUrgency.length
    };

    tasks.forEach(element => {
      let task = {
        done: false,
        task: element.value
      }

      todo.tasks.push(task);
      element.value = '';
    });

    this.removeAllAddedTasks(this.numOfAddedTasks);

    title.value = '';

    this._TodoService.postTodo(todo).subscribe(
      data => { 
        console.log('New Todo was added: ', todo);
        this.updateTodoList.emit();
        this._TodoService.getTodos(this.username).subscribe(value => this.todos = value);
      },
      err => console.log(err)
    );
  }

}
