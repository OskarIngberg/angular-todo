import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { routes } from './config/route.config';

import { TodoService } from './service/todo/todo.service';
import { LoginService } from './service/login-helper/login.service';
import { LoginGuardService } from './service/login-helper/login-guard/login-guard.service';
import { LoginCrudService } from './service/login-helper/login-crud/login-crud.service';
import { CreateAccountService } from './service/create-account-helper/create-account.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';

import { TodofilterPipe } from './pipes/todofilter/todofilter.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    TodoComponent,
    TodoListComponent,
    TodoPageComponent,
    LoginPageComponent,
    LoginComponent,
    CreateAccountPageComponent,
    CreateAccountComponent,
    TodofilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TodoService,
    LoginService,
    LoginGuardService,
    LoginCrudService,
    CreateAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
