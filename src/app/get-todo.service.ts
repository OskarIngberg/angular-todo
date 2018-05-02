import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GetTodoService {
  constructor(private http: HttpClient) {}
  
  getTodos() {
    return this.http.get('localhost:27017/tasks');
  }
}
