import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private defaulTodoList : TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'}
  ];

  private storageKey = "todolist";
  private todoList;

  constructor( private storageService : StorageService) {
    this.todoList = storageService.getData(this.storageKey) || this.defaulTodoList;
   }


  getTodoList() {
    return this.todoList;
  }

  addItem(item : TodoItem){
   this.todoList.push(item);
   this.saveList();
  }

  updateItem(item, changes){
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes}; // Stworzony obiekt wszystkie itemy bierzemy i zapisujemy wszystkie zmiany(dzieki tym 3 kropkom robimy wszystkie zminay
    this.saveList();
  }

  saveList(){
    this.storageService.setData(this.storageKey, this.todoList);
  }

  deleteItem(item){
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
