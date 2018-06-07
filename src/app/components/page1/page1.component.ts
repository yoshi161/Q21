import { Component } from '@angular/core';

import { DragDropUtils } from '../dragDrop/utils';

@Component({
  selector: 'page1',
  templateUrl: 'page1.html'
})
export class Page1Component {
	public items: any[] = [];
	public removedItems: any[] = [];

	constructor() {
    	this.items = DragDropUtils.generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` }));
	}

	removeItem($event) {
		debugger
		this.removedItems.push($event);
	}
}