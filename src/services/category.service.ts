import { Category } from "../models/category";
import { Injectable } from "@angular/core";
import { ToDoService } from "./to-do.service";

@Injectable()
export class CategoryService{
    categories:Category[]=[];
    latestId:number=0;

    constructor(private todoService:ToDoService){
    }

    getCategories(){
        return this.categories.slice();
    }

    addCategory(values:Category){
        if(!this.categories.some(val=> val.Name===values.Name)){
            this.categories.push({Cat_Id:++this.latestId,Name:values.Name});
        }
        else{
        }
        return this.categories;
    }

    removeCategory(catId:number){
        if(this.categories.some(val=> val.Cat_Id===catId)){
            this.categories.splice(this.categories.findIndex(item=>item.Cat_Id===catId),1);
            console.log("Categories : "+this.categories);
        }
        return this.categories;
    }
}