import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  public activeLink!: string;
  public homeMenus = [
    {
      label: 'Dashboard',
      path: 'dashboard'
    },
    {
      label: 'Announcement',
      path: 'announcement'
    }
  ]

  selectedTabIndex = 0; // Default to the first tab

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((data) => {
      console.log(data)
      this.activeLink = data.toString().split('/')[2]
    });
    // this.activeLink = this.route
  }

  ngOnInit(): void {
    // Listen for route changes

    
    // this.updateTabIndex();
  }



  
}
