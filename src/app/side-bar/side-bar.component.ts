import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list:string[]=["To Day","Personal","Grossary"];
  activeSidebar:boolean=false;

  onRightClick(e){
    //e.preventDefault();
    console.log(e);
  }

}
