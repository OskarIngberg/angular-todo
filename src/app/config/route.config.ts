import { Routes } from '@angular/router';
import { TodoPageComponent } from '../pages/todo-page/todo-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { CreateAccountPageComponent } from '../pages/create-account-page/create-account-page.component';

import { LoginGuardService } from '../service/login-helper/login-guard/login-guard.service';

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
    },
    {
      path: 'createAccount',
      component: CreateAccountPageComponent
    }
];

export { routes };