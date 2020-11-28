import { NgModule } from '@angular/core';
import { LocationDataProviderService } from './location-data-provider.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [LocationDataProviderService],
})
export class DataProviderModule {
  constructor() {}
}
