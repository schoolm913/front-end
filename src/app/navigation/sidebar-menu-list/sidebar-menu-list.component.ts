import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Menu } from '../models/navigation.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';

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

currentRoute: string = '';

constructor(private router: Router, private route: ActivatedRoute) {
      // Set current route during the initial load
      this.currentRoute = this.router.url.split('/')[1];
  // Track route changes
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    this.currentRoute = event.urlAfterRedirects.split('/')[1];
  });
}

ngOnChanges(changes: SimpleChanges){

}

   // Check if route is active
  public isRouteActive(route: string): boolean {
    return this.currentRoute.split('/')[1] === route;
  }
}
