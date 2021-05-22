import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  title!: string;
  description!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    const todo = {
      title: this.title,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo)
  }


}
