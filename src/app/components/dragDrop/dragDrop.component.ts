import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { DragDropUtils } from './utils';

@Component({
  selector: 'drag-drop',
  templateUrl: 'dragDrop.html'
})
export class DragDropComponent {

  @Input() items: any[];
  @Output() item: any;
  @Output() removedItem:EventEmitter<any> = new EventEmitter<any>();

/*  items2 = DragDropUtils.generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` }));
  items3 = DragDropUtils.generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` }));
  items4 = DragDropUtils.generateItems(15, (i) => ({ id: '4' + i, data: `Draggable 4 - ${i}` }));*/

  constructor() {
    this.getChildPayload = this.getChildPayload.bind(this);
 /*   this.getChildPayload2 = this.getChildPayload2.bind(this);
    this.getChildPayload3 = this.getChildPayload3.bind(this);
    this.getChildPayload4 = this.getChildPayload4.bind(this);*/
  }

  onDrop(collection, dropResult) {
    this.items = DragDropUtils.applyDrag(this.items, dropResult);
  }

  removeItem(item) {
    this.items = this.items.filter(e => e !== item);
    this.removedItem.emit(item);
  }

  public getChildPayload(index) {
    return this.items[index];
  }
/*  getChildPayload2(index) {
    return this.items2[index];

  }
  getChildPayload3(index) {
    return this.items3[index];

  }
  getChildPayload4(index) {
    return this.items4[index];
  }*/
}