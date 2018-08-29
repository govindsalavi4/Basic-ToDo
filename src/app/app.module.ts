import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { ContentComponent } from './content/content.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModaldemoComponent } from './modaldemo/modaldemo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LeftbarComponent,
    ContentComponent,
    ModaldemoComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
