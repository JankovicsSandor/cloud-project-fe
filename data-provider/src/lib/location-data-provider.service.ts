import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDataProviderService } from './base-data-provider.service';
import { environment } from './../../../apps/cloud-project-fe/src/environments/environment';
import { LocationItem } from '@shared';

@Injectable()
export class LocationDataProviderService extends BaseDataProviderService {
  constructor(private http: HttpClient) {
    super(environment.backendUrl, http);
  }

  getLocationList() {
    return this.get<LocationItem[]>('list');
  }
}
