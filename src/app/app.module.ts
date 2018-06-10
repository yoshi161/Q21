import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { DragDropComponent } from './components/dragDrop/dragDrop.component';
import { RemovedItemComponent } from './components/removedItem/removedItem.component';

import { OrderByPipe } from './pipes/orderBy/orderBy';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HomeComponent,
    DragDropComponent,
    RemovedItemComponent,

    OrderByPipe,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    NgxSmoothDnDModule,

    //bootstrap
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
