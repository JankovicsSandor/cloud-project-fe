import { Injectable } from '@angular/core';
import { LocationDataProviderService } from '@data-provider';
import { CreateLocation, LocationItem } from '@shared';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class LocationListService {
  constructor(private locationService: LocationDataProviderService) {
    this.refreshLocationList();
  }

  private locationList$: ReplaySubject<LocationItem[]> = new ReplaySubject();

  public getLocationList$() {
    return this.locationList$.asObservable();
  }

  public refreshLocationList() {
    this.locationService.refreshLocationList().subscribe((val) => {
      this.locationList$.next([...val]);
    });
  }

  public addNewLocation(newLocation: CreateLocation) {
    this.locationService.createNewLocation(newLocation).subscribe((_) => {
      this.refreshLocationList();
    });
  }

  public deleteLocation(locationId: number) {
    this.locationService.deleteLocation(locationId).subscribe((_) => {
      this.refreshLocationList();
    });
  }
}
