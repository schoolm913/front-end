import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { Menu } from './models/navigation.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: false
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public collabseSideBar: WritableSignal<boolean> = signal(false);
  public collabseSideBarWidth: Signal<string> = computed(() => this.collabseSideBar() ? '64px' : '280px');
  public menuList: Menu[] = [
    {
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
      expanded: true
      // ,
      // subMenu: [
      //   {
      //     name: 'Dashboard',
      //     icon: 'home',
      //     path: []
      //   }
      // ]
    },
    {
      name: 'Home',
      icon: 'home',
      path: [],
      expanded: true,
      subMenu: [
        {
          name: 'Dashboard',
          icon: 'home',
          path: ['/dsfs1']
        },
        {
          name: 'Dashboard',
          icon: 'home',
          path: ['/home']
        }
      ],
      parentPath: "activeMenu: [isActive('/dsfs1'), isActive('/home')]"
    },
    {
      name: 'Home',
      icon: 'home',
      path: [],
      expanded: true,
      subMenu: [
        {
          name: 'Dashboard',
          icon: 'home',
          path: ['/dsfs1']
        },
        {
          name: 'Dashboard',
          icon: 'home',
          path: ['/home1']
        }
      ]
    }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public onSidenavOpenedChange(event: any){

    }

    public onSidenavClosedStart(){

    }

}
