import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { DragDropUtils } from '../dragDrop/utils';

@Component({
  selector:  'page1',
  templateUrl: 'page1.html'
})
export class Page1Component {
    items: any[] = [];
    removedItems: any[] = [];
    selectedValue: string = '';

    constructor() {
        this.items = DragDropUtils.generateItems(15, (i) => ({ id: '1' + i, data: `Draggable-1-${i}`, idx: i }));
    }

    filteredRemovedItems() {
        const criteria = this.selectedValue.toLowerCase();
        const removedItems = this.removedItems
                    .filter(item => {
                            return item.data.toLowerCase().indexOf(criteria) !== -1 ||
                                criteria.length === 0;
                       });
        return removedItems;
    }

    onSelect($event) {
    }

    removeItem($event) {
        this.items = this.items.filter(e => e !== $event);
        this.removedItems.push($event);
    }

    addItemBack($event) {
        console.log($event);
        this.removedItems = this.removedItems.filter(e => e !== $event);
        this.items.push($event);
    }

    addItemBackDragDrop($event) {
        this.removedItems = DragDropUtils.applyDrag(this.removedItems, $event);
    }

    removeItemDragDrop($event) {
        debugger
        this.items = DragDropUtils.applyDrag(this.items, $event);
    }
}