import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoScreenComponent } from './todo-screen/todo-screen.component';
import { WebsiteComponent } from './website/website.component';
import {FormsModule} from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { ToDoService } from '../services/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoScreenComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CategoryService,ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
