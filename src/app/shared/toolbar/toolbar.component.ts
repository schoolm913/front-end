//--------------------------------------------------------------------------------------------------------------------------
// Angular imports
//--------------------------------------------------------------------------------------------------------------------------
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


//--------------------------------------------------------------------------------------------------------------------------
// Material imports
//--------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------
// Local imports
//--------------------------------------------------------------------------------------------------------------------------
import { SearchComponent } from "../search/search.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, SearchComponent, AvatarComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit, OnChanges {
 
  // Output
  @Output() change = new EventEmitter<string>();


  // public
  public inputValue: FormControl = new FormControl("");

  //--------------------------------------------------------------------------------------------------------------------------
  // Life cycle hooks
  //--------------------------------------------------------------------------------------------------------------------------

  // Oninit
  ngOnInit(): void {
    // listen input event
    this.inputValue.valueChanges.pipe().subscribe({
      next: (value) => {
        this.change.emit(value)
      }
    })
  }

  // On changes
  ngOnChanges(changes: SimpleChanges): void {
   
  }


  //--------------------------------------------------------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------------------------------------------------------

  // clear input
  public toggleFullscreen() {
    this.inputValue.setValue("");
  }
}
