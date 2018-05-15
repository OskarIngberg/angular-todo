import { Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'todos',
      pathMatch: 'full'
    },
    {
      path: 'todos',
      component: TodoPageComponent
    }
];

export { routes };