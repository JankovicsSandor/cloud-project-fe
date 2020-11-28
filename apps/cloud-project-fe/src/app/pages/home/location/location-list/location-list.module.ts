import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LocationListComponent } from './location-list.component';
import { LocationListViewComponent } from './location-list-view/location-list-view.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LocationListComponent, LocationListViewComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [LocationListComponent],
})
export class LocationListModule {}
