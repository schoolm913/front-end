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
      id: 1,
      name: 'Home',
      icon: 'home',
      path: ['/home1', '/dashboard1'],
       expanded: false
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
      id: 2,
      name: 'Home',
      icon: 'home',
      path: ['/home'],
       expanded: false,
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
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
    },
    {
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
    },
    {
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
    },
    {
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
    },
    {
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
    },
    {
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
    },
    {
      id: 3,
      name: 'Home',
      icon: 'home',
      path: ['/home1'],
       expanded: false,
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
