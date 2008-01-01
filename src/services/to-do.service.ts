import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  ToDos:ToDo[]=[];
  latestId:number=1;


  constructor() {
  }

  addToDo(todo:ToDo){
    todo.Id=++this.latestId;
    this.ToDos.push(todo);
    return this.ToDos.filter(td=>td.Cat_Id===todo.Cat_Id);
  }

  getToDoByCategory(catId:number){
    return this.ToDos.filter(e=>e.Cat_Id===catId);
  }

  getToDoCountByCategory(catId:number){
    return (this.ToDos.filter(val=>val.Cat_Id===catId)).length;
  }

  removeToDoByCat(catId:number){
    const tds:ToDo[]=this.ToDos.filter(val=>val.Cat_Id===catId);
    tds.forEach(el=>{
      this.ToDos.splice(this.ToDos.findIndex(val=>val.Id===el.Id),1);
    });
    return this.ToDos;
  }
  removeToDo(todoId:number){
    this.ToDos.splice(this.ToDos.findIndex(val=>val.Id===todoId),1);
    return this.ToDos;
  }
}
