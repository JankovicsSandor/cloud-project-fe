import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationItem } from '@shared';

@Component({
  selector: 'location-list-view',
  templateUrl: './location-list-view.component.html',
  styleUrls: ['./location-list-view.component.scss'],
})
export class LocationListViewComponent implements OnInit {
  @Input() itemList: LocationItem[] = [];

  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteItem(id: number) {
    this.deleteEvent.emit(id);
  }
}
