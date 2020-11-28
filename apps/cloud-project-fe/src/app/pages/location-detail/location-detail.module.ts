import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationDetailRoutingModule } from './location-detail-routing.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationDetailViewComponent } from './location-detail/location-detail-view/location-detail-view.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [LocationDetailComponent, LocationDetailViewComponent],
  imports: [CommonModule, LocationDetailRoutingModule, MatDividerModule],
})
export class LocationDetailModule {}
