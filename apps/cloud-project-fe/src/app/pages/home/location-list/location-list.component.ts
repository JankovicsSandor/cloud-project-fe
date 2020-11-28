import { Component, OnInit } from '@angular/core';
import { LocationDataProviderService } from '@data-provider';
import { LocationItem } from '@shared';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locationList$: ReplaySubject<LocationItem[]>;
  constructor(private locationService: LocationDataProviderService) {}

  ngOnInit(): void {
    this.locationService.getLocationList().subscribe(this.locationList$);
  }
}
