import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css']
})
export class NewItemFormComponent {
  @Output() addItem = new EventEmitter<string>();
}
