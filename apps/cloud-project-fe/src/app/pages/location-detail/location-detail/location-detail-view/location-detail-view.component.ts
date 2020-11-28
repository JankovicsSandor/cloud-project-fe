import { Component, Input, OnInit } from '@angular/core';
import { LocationDetail } from '@shared';

@Component({
  selector: 'location-detail-view',
  templateUrl: './location-detail-view.component.html',
  styleUrls: ['./location-detail-view.component.scss'],
})
export class LocationDetailViewComponent implements OnInit {
  @Input() locationData: LocationDetail;
  constructor() {}

  ngOnInit(): void {}
}
