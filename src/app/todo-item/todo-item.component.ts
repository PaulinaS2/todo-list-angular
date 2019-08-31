import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input type='checkbox' class='todo-checkboc' (click) = 'completeItem()'/>
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
          {{ item.title }}
      </span>
      <button class = 'btn btn-red' (click) = 'deleteItem()'> REMOVE </button>

    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item : TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  deleteItem(){
    this.remove.emit(this.item);
  }

  completeItem(){
    this.update.emit({item : this.item, changes : {completed : !this.item.completed} });
  }

  ngOnInit() {
  }

}
