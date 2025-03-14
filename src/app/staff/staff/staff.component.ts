import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  public viewType!: string;
  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(){
    this.viewType = this.route.snapshot.children.length ? this.route.firstChild?.snapshot.data['view'] : this.route.snapshot.data['view'];
    this.router.events.subscribe(data => {
      if(data instanceof NavigationEnd){
        this.viewType = this.route.snapshot.children.length ? this.route.firstChild?.snapshot.data['view'] : this.route.snapshot.data['view'];
        console.log(this.viewType)
      }
    })
    console.log(this.viewType)
  }

}
