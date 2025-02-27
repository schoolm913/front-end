import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { TeachersAddEditPageComponent } from './teachers-add-edit-page/teachers-add-edit-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    TeachersAddEditPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    DashboardModule,
    AnnouncementModule
  ]
})
export class HomeModule { }
