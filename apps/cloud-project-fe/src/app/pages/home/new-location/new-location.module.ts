import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLocationComponent } from './new-location.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NewLocationComponent],
  imports: [CommonModule, MatCardModule],
  exports: [NewLocationComponent],
})
export class NewLocationModule {}
