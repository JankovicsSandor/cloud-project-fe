import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LocationListModule } from './location/location-list/location-list.module';
import { NewLocationModule } from './location/new-location/new-location.module';
import { LocationListService } from './location/location-list.service';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocationListModule,
    NewLocationModule,
  ],
  providers: [LocationListService],
})
export class HomeModule {}
