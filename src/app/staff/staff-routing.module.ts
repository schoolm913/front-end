import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffAddOrEditComponent } from './staff-add-or-edit/staff-add-or-edit.component';

const routes: Routes = [
  {
    path: 'staff-details',
    component: StaffComponent,
    data: {
      view: 'list'
    },
    children:[
      {
        path: 'add',
        component: StaffAddOrEditComponent,
        data: {
          view: 'add'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
