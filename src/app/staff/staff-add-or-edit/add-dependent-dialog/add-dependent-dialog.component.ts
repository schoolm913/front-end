import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-dependent-dialog',
  templateUrl: './add-dependent-dialog.component.html',
  styleUrl: './add-dependent-dialog.component.scss',
  standalone: false
})
export class AddDependentDialogComponent {
  public dependentFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder)
{}
  createFormGroup(){
    this.dependentFormGroup = this._formBuilder.group({
      name: [''],
      relationShip: [''],
      gender: [''],
      dob: ['']
    })
  }
}
