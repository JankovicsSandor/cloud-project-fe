import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cloud-project-fe-new-location-dialog',
  templateUrl: './new-location-dialog.component.html',
  styleUrls: ['./new-location-dialog.component.scss'],
})
export class NewLocationDialogComponent implements OnInit {
  newPlaceForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewLocationDialogComponent>
  ) {
    this.newPlaceForm = this.fb.group({
      customPlaceName: [''],
      placeName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }
}
