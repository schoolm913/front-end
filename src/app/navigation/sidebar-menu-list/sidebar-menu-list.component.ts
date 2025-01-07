import { Component, Input, SimpleChanges } from '@angular/core';
import { Menu } from '../models/navigation.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-menu-list',
  templateUrl: './sidebar-menu-list.component.html',
  styleUrl: './sidebar-menu-list.component.scss',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, RouterModule, MatIconModule]
})
export class SidebarMenuListComponent {
@Input() menuList!: Menu[];
panelOpenState = false;
subpanel!: any;

ngOnChanges(changes: SimpleChanges){

}

// Public methods
public openOrClose(ind: number){
  this.menuList[ind].expanded = !this.menuList[ind].expanded;
 }
}
