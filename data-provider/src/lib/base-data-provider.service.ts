import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseDataProviderService {
  constructor(private baseUrl: string, private client: HttpClient) {}

  public get<T>(path: string, query: any = null) {
    return this.client.get<T>(this.baseUrl + path, { params: query });
  }

  public post<T>(path: string, body: any, query: any = null) {
    return this.client.post<T>(this.baseUrl + path, body, { params: query });
  }

  public delete<T>(path: string, query: any = null) {
    return this.client.delete<T>(this.baseUrl + path, { params: query });
  }
}
