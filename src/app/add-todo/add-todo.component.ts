import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

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
  }

  removeTask(event): void {
    var elementToRemove = event.srcElement.parentElement;
    elementToRemove.remove();
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
    });

    console.log(todo);
  }

}
