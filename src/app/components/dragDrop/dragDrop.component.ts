import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { DragDropUtils } from './utils';

@Component({
  selector: 'drag-drop',
  templateUrl: 'dragDrop.html'
})
export class DragDropComponent {

  @Output() item: any;
  @Input() items: any[];
  @Output() removeItemOut:EventEmitter<any> = new EventEmitter<any>();
  @Output() removeItemDragDropOut:EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    this.getChildPayload = this.getChildPayload.bind(this);
  }

  onDrop(collection, dropResult) {
    this.removeItemDragDropOut.emit(dropResult);
  }

  removeItem(item) {
    this.removeItemOut.emit(item);
  }

  public getChildPayload(index) {
    return this.items[index];
  }
}