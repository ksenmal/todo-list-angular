import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input() filter!: string;
  @Output() setFilter = new EventEmitter<'all' | 'done' | 'active'>();
}
