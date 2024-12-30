import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss',
  standalone: false
})
export class UserPanelComponent {
  @Input() collapsed: boolean = false;
  
  // Life cycle
  ngChanges(){

  }
}
