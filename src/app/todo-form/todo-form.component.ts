import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  constructor() {}
  todos: any = [];
  ngOnInit(): void {
    this.todos = [
      {
        task: 'task 1',
        completed: false,
      },
      {
        task: 'task 2',
        completed: false,
      },
    ];
  }
  doneTask(id: number): any {
    this.todos.map((todo: any, index: number) => {
      index === id ? (todo.completed = !todo.completed) : '';
      return todo;
    });
  }
  deleteTask(id: number): void {
    this.todos = this.todos.filter((todo: any, index: number) => index !== id);
  }
  addTask(todo: string) {
    this.todos.push({
      task: todo,
      completed: false,
    });
  }
}
