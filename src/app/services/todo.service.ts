import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos;
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('../../assets/data.json').subscribe(response=>{
      this.todos = response;
    });
  }

}
