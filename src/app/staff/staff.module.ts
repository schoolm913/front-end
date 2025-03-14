import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff/staff.component';
import { StaffAddOrEditComponent } from './staff-add-or-edit/staff-add-or-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { AddDependentDialogComponent } from './staff-add-or-edit/add-dependent-dialog/add-dependent-dialog.component';


@NgModule({
  declarations: [
    StaffComponent,
    StaffAddOrEditComponent,
    AddDependentDialogComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,

    MatDatepickerModule, MatAutocompleteModule, MatButtonModule, MatDialogModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule, ReactiveFormsModule, RouterModule
  ]
})
export class StaffModule { }
