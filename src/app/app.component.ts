//--------------------------------------------------------------------------------------------------------------------------
// Angular imports
//--------------------------------------------------------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})

export class AppComponent implements OnInit {
  public isLoading: boolean = true;

  //--------------------------------------------------------------------------------------------------------------------------
  // Life cycle hooks
  //--------------------------------------------------------------------------------------------------------------------------
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

  }

}
