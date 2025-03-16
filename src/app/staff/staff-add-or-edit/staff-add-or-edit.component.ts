import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDependentDialogComponent } from './add-dependent-dialog/add-dependent-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff-add-or-edit',
  templateUrl: './staff-add-or-edit.component.html',
  styleUrl: './staff-add-or-edit.component.scss',
  standalone: false,
})
export class StaffAddOrEditComponent {
  public staffForm!: FormGroup;
  constructor(private dialog: MatDialog, private _formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  openAddDependentDialog() {
    const dialogRef = this.dialog.open(AddDependentDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  createFormGroup() {
    this.staffForm = this._formBuilder.group({
      employeeId: [null],
      firstName: [null],
      lastName: [null],
      bloodGroup: [null],
      dob: [null],
      role: [null],
      employmentStatus: [null],
      dateOfJoining: [null],
      workLocation: [null],
      gender: [null],
      address: this._formBuilder.group({
        addressLineOne: [null],
        addressLineTwo: [null],
        city: [null],
        county: [null],
        country: [null],
        postCode: [null],
      }),
      contactDetails: this._formBuilder.group({
        mobileNumber: [null],
        personalMail: [null],
      }),
      // ,
      // dependentsDetails: this._formBuilder.array([])
    });
  }

  onClickSave(){
    console.log(this.staffForm.value)
  }
}
