import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  @Input() name: string = ''; // User name for initials
  @Input() imageUrl: string = ''; // Avatar image URL
  @Input() size: number = 40; // Size of the avatar (in pixels)
  @Input() bgColor: string = ''; // Background color from hash
  @Input() textColor: string = '#fff'; // Text color for initials

  initials: string = '';
  backgroundColor: string = '#6c757d'; // Default background color
  public fontSize!: number;

  ngChanges(changes: SimpleChanges){
      if (changes['size']) {
      this.fontSize = (Math.round(this.size/3) + Math.round(this.size/4));
    }
  }

  ngOnInit(): void {
    this.generateInitials();
    if (!this.imageUrl) {
      this.backgroundColor = this.generateHashColor(this.name);
    }
    if(!this.fontSize){
      this.fontSize = (Math.round(this.size/3) + Math.round(this.size/4));
    }
  }

  private generateInitials(): void {
    if (this.name) {
      const names = this.name.split(' ');
      this.initials = names.map(n => n.charAt(0).toUpperCase()).join('');
    }
  }

  private generateHashColor(str: string): string {
    let hash = 0;

    // Simple hash function based on the string's characters
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i); // Combine the character codes
      hash = hash & hash; // Convert to 32-bit integer
    }
  
    // Extract RGB values from the hash
    const red = (hash >> 16) & 0xFF; // Extract red from the hash
    const green = (hash >> 8) & 0xFF; // Extract green from the hash
    const blue = hash & 0xFF; // Extract blue from the hash
  
    // Convert each RGB value to a 2-digit hexadecimal value and concatenate them
    const color = `#${(red).toString(16).padStart(2, '0')}${(green).toString(16).padStart(2, '0')}${(blue).toString(16).padStart(2, '0')}`;
  
    return color;
  }

}