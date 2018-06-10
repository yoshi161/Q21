import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';

import { DragDropUtils } from '../dragDrop/utils';

@Component({
  selector: 'removed-item',
  templateUrl: 'removedItem.html'
})
export class RemovedItemComponent {
  private REMOVED_ITEM: string = 'removed-item';

  @Input() removedItems: any[];
  @Output() addItemBackOut:EventEmitter<any> = new EventEmitter<any>();
  @Output() addItemBackDragDropOut:EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.getChildPayload = this.getChildPayload.bind(this);
  }

  addItemBack(item) {
    this.addItemBackOut.emit(item);
  }


  onDrop(collection, dropResult) {
    this.addItemBackDragDropOut.emit(dropResult);
  }

  public getChildPayload(index) {
    return this.removedItems[index];
  }

}