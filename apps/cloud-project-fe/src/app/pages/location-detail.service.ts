import { Injectable } from '@angular/core';
import { LocationDataProviderService } from '@data-provider';
import { LocationDetail } from '@shared';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class LocationDetailService {
  constructor(private locationService: LocationDataProviderService) {}

  private locationData$: ReplaySubject<LocationDetail> = new ReplaySubject();

  getOneLocationData(id: number) {
    this.locationService.getOneLocationDetail(id + '');
  }
}
