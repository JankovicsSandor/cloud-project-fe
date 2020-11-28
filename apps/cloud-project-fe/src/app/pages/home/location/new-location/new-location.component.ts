import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationDataProviderService } from '@data-provider';
import { CreateLocation } from '@shared';
import { LocationListService } from '../location-list.service';
import { NewLocationDialogComponent } from './new-location-dialog/new-location-dialog.component';

@Component({
  selector: 'new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private locationService: LocationListService
  ) {}

  ngOnInit(): void {}

  openCreateNewItemDialog() {
    const dialog = this.dialog.open(NewLocationDialogComponent, {
      disableClose: true,
    });

    dialog.afterClosed().subscribe((filledValue) => {
      if (filledValue) {
        this.locationService.addNewLocation(<CreateLocation>{
          locationName: filledValue.customPlaceName,
          name: filledValue.placeName,
        });
      }
    });
  }
}
