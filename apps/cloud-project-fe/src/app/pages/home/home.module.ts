import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LocationListModule } from './location-list/location-list.module';
import { NewLocationComponent } from './new-location/new-location.component';
import { NewLocationModule } from './new-location/new-location.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, NewLocationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LocationListModule, NewLocationModule],
})
export class HomeModule {}
