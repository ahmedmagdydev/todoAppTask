import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTodo = ''
  constructor(private todoService: TodoService) { 
    
  }

  ngOnInit(): void {
  }


  AddTodo(){
    if(this.newTodo == '')
      return;
    
    this.todoService.todos.push({
      name: this.newTodo,
      checked: false
    })

    this.newTodo = '';
  }
}
