import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LocationListComponent } from './location-list.component';
import { LocationListViewComponent } from './location-list-view/location-list-view.component';

@NgModule({
  declarations: [LocationListComponent, LocationListViewComponent],
  imports: [CommonModule, MatCardModule],
  exports: [LocationListComponent],
})
export class LocationListModule {}
