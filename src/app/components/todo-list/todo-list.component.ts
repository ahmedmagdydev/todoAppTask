import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList


  constructor(private todoService: TodoService){
    this.todoList = this.todoService.todos;
  }

  checkTodo(event, index){
    this.todoList[index].checked = !this.todoList[index].checked;
  }
  
  removeTodo(event, index){
	  this.todoList.splice(index, 1);
  }

  ngOnInit(){

  }
}
