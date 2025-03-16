import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dependent-dialog',
  templateUrl: './add-dependent-dialog.component.html',
  styleUrl: './add-dependent-dialog.component.scss',
  standalone: false
})
export class AddDependentDialogComponent {
  public dependentFormGroup!: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddDependentDialogComponent>, private _formBuilder: FormBuilder)
{
  this.createFormGroup()
}



  createFormGroup(){
    this.dependentFormGroup = this._formBuilder.group({
      name: [''],
      relationShip: [''],
      gender: [''],
      dob: ['']
    })
  }

  onSubmit(){
    // console.log(this.dependentFormGroup.value)
    this.dialogRef.close(this.dependentFormGroup.value);
  }

  onClickClose(){
    this.dialogRef.close();
  }
}
