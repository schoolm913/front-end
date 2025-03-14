//--------------------------------------------------------------------------------------------------------------------------
// Angular imports
//--------------------------------------------------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//--------------------------------------------------------------------------------------------------------------------------
// Local imports
//--------------------------------------------------------------------------------------------------------------------------
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'teachers', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
