//--------------------------------------------------------------------------------------------------------------------------
// Angular imports
//--------------------------------------------------------------------------------------------------------------------------
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


//--------------------------------------------------------------------------------------------------------------------------
// Material imports
//--------------------------------------------------------------------------------------------------------------------------
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  // Input
  @Input() defaultValue: string = '';
  @Input() placeHolder: string = 'Search ...';

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
    // set in input control
    if (changes['defaultValue']) {
      this.inputValue.setValue(this.defaultValue)
    }
  }


  //--------------------------------------------------------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------------------------------------------------------

  // clear input
  public clearInput() {
    this.inputValue.setValue("");
  }
}
