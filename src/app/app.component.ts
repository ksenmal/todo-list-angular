import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: 'all' | 'active' | 'done' = 'all';
  allItems = [
    {description: 'eat', done: true},
    {description: 'sleep', done: false},
    {description: 'play', done: false},
    {description: 'laugh', done: false}
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }

    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  setFilter(value: 'all' | 'done' | 'active' ) {
    this.filter = value;
  }

  addItem(description: string) {
    if (description !== '') {
      this.allItems.unshift({
        description, done: false
      });
    }
  }

  deleteItem(item: Item) {
    this.allItems = this.allItems.filter(i => i.description !== item.description);
  }
}
