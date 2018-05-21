import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { routes } from './route.config';

import { TodoService } from './todo.service';
import { LoginService } from './login-helper/login.service';
import { LoginGuardService } from './login-helper/login-guard/login-guard.service';
import { LoginCrudService } from './login-helper/login-crud/login-crud.service';
import { CreateAccountService } from './create-account-helper/create-account.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';

import { TodofilterPipe } from './todofilter.pipe';

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
    TodofilterPipe
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
