import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDataProviderService } from './base-data-provider.service';
import { environment } from './../../../apps/cloud-project-fe/src/environments/environment';
import { CreateLocation, LocationDetail, LocationItem } from '@shared';

@Injectable()
export class LocationDataProviderService extends BaseDataProviderService {
  constructor(private http: HttpClient) {
    super(environment.backendUrl, http);
  }

  refreshLocationList() {
    return this.get<LocationItem[]>('api/location/list');
  }

  createNewLocation(newItem: CreateLocation) {
    return this.post<CreateLocation>('api/location', newItem);
  }

  getOneLocationDetail(locationID: number) {
    return this.get<LocationDetail>(`api/location/detail/${locationID}`);
  }

  deleteLocation(locationIdToDelete: number) {
    return this.delete<any>(`api/location/${locationIdToDelete}`);
  }
}
