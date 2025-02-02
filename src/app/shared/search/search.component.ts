//--------------------------------------------------------------------------------------------------------------------------
// Angular imports
//--------------------------------------------------------------------------------------------------------------------------
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


//--------------------------------------------------------------------------------------------------------------------------
// Material imports
//--------------------------------------------------------------------------------------------------------------------------
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { KeyboardShortCutDirective } from '../../directives-pipes/directives/keyBoardShortCut.directive';
import { keyboardShortCut } from '../../config/config';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, KeyboardShortCutDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {

  // Input
  @Input() defaultValue: string = '';
  @Input() placeHolder: string = 'Search ...';
  @Input() keyboardShortCut: string = '';


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
