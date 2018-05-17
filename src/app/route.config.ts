import { Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginGuardService } from './login-helper/login-guard/login-guard.service';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'todos',
      pathMatch: 'full'
    },
    {
      path: 'todos',
      canActivate: [LoginGuardService],
      component: TodoPageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    }
];

export { routes };