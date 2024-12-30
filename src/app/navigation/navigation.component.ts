import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { AvatarComponent } from '../shared/avatar/avatar.component';

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
  public menu = [
    {
      name: 'Home',
      icon: 'home',
      subMenu: [
        {
          name: 'Dashboard',
          icon: 'home',
          path: ''
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
