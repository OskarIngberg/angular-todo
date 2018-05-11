import { Component, OnInit, ElementRef, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../todo.service'
import { element } from 'protractor';

@Component({
  selector: 'app-add-todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private _TodoService: TodoService
  ) { }

  @Output() updateTodoList = new EventEmitter();

  numOfAddedTasks: number = 0;

  ngOnInit() {
  }

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

  addTodo(event): void {
    const form = event.srcElement.parentElement;
    const title = form.querySelector('[name="title"]');
    const tasks = form.querySelectorAll('[name="task"]');

    let todo = {
      title: title.value,
      tasks: []
    };

    tasks.forEach(element => {
      let task = {
        done: false,
        task: element.value
      }

      todo.tasks.push(task);
      element.value = '';
    });

    if (this.numOfAddedTasks > 0) {
      var tasksWrapper = this.elementRef.nativeElement.querySelector('#tasks');
      var addedTasks = tasksWrapper.querySelectorAll('.added-task');
      
      addedTasks.forEach(element => {
        element.remove();
      });
    };

    title.value = '';

    this._TodoService.postTodo(todo).subscribe(
      data => { 
        console.log('New Todo was added: ', todo);
        this.updateTodoList.emit();
      },
      err => console.log(err)
    );
  }

}
