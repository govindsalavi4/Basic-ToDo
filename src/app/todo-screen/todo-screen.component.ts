import { Component, OnInit, OnChanges } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ToDoService } from '../../services/to-do.service';
import { ToDo } from '../../models/todo';

@Component({
  selector: 'app-todo-screen',
  templateUrl: './todo-screen.component.html',
  styleUrls: ['./todo-screen.component.css']
})
export class TodoScreenComponent implements OnInit,OnChanges {
  newCategory:string="";
  newTodo:string="";
  categories:Category[];
  selectedCategory:Category=null;
  ToDos:ToDo[]=[];

  constructor(private categoryService:CategoryService,private todoservice:ToDoService) { 
    
  }

  ngOnInit() {
    this.categories=this.categoryService.getCategories();
  }

  ngOnChanges(){
    this.categories=this.categoryService.getCategories();
  }

  AddCategory(){
    this.categories=this.categoryService.addCategory({Cat_Id:0,Name:this.newCategory});
  }

  onCatSelect(catId:number,event:Event){
    this.selectedCategory=(this.categories.filter(val=>val.Cat_Id===catId))[0];
    this.ToDos=this.todoservice.getToDoByCategory(catId);
  }

  AddToDo(){
    this.ToDos=this.todoservice.addToDo({Id:0,Title:this.newTodo,Cat_Id:this.selectedCategory.Cat_Id,isCompleted:false});
  }

  getActiveClass(catId:number){
    if(this.selectedCategory){
      if(catId===this.selectedCategory.Cat_Id) return true;
      else return false;
    }
    else return false;
  }

  getTodoCount(catId:number){
    return this.todoservice.getToDoCountByCategory(catId);
  }

  deleteCat(catId:number){
    this.categories=this.categoryService.removeCategory(catId);
    this.ToDos=(this.todoservice.removeToDoByCat(catId)).filter(val=>val.Cat_Id===this.selectedCategory.Cat_Id);
  }

  deleteToDo(todoId:number){
    this.ToDos=(this.todoservice.removeToDo(todoId)).filter(val=>val.Cat_Id===this.selectedCategory.Cat_Id);
  }
}
