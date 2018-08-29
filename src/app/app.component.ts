import { Component, ElementRef, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list:string[]=["To Day","Personal","Grossary"];
  activeSidebar:boolean=false;

  onRightClick(e){
    //e.preventDefault();
    console.log(e);
  }

}
