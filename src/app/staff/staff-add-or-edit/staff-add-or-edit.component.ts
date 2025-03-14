import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDependentDialogComponent } from './add-dependent-dialog/add-dependent-dialog.component';

@Component({
  selector: 'app-staff-add-or-edit',
  templateUrl: './staff-add-or-edit.component.html',
  styleUrl: './staff-add-or-edit.component.scss',
  standalone: false
})
export class StaffAddOrEditComponent {
  constructor(private dialog:MatDialog){

  }

  openAddDependentDialog() {
    const dialogRef = this.dialog.open(AddDependentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
