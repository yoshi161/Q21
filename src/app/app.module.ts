import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { HomeComponent } from './components/home/home.component';
import { DragDropComponent } from './components/dragDrop/dragDrop.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HomeComponent,
    DragDropComponent
  ],
  imports: [
    routing,
    BrowserModule,
    NgxSmoothDnDModule,
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
