import { Component, OnInit } from '@angular/core';
import { LocationItem } from '@shared';
import { ReplaySubject } from 'rxjs';
import { LocationListService } from '../location-list.service';

@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locationList$: ReplaySubject<LocationItem[]> = new ReplaySubject();
  constructor(private locationService: LocationListService) {}

  ngOnInit(): void {
    this.locationService.getLocationList$().subscribe(this.locationList$);
  }

  deleteItem(itemId: number) {
    this.locationService.deleteLocation(itemId);
  }
}
