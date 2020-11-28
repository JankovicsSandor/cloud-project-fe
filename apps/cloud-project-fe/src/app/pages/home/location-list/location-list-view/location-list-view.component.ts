import { Component, Input, OnInit } from '@angular/core';
import { LocationItem } from '@shared';

@Component({
  selector: 'location-list-view',
  templateUrl: './location-list-view.component.html',
  styleUrls: ['./location-list-view.component.scss'],
})
export class LocationListViewComponent implements OnInit {
  @Input() itemList: LocationItem[] = [];
  constructor() {}

  ngOnInit(): void {}
}
