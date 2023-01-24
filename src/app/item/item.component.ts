import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;

  @Input() item!: Item;
  @Output() deleteEvent = new EventEmitter();

  saveItem(description: string) {
    if (description !== '') {
      this.item.description = description;
      this.editable = false;
    }
  }

  deleteItem() {
    this.deleteEvent.emit();
  }
}
