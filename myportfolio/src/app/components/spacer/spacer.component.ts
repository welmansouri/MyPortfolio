import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spacer',
  imports: [CommonModule],
  templateUrl: './spacer.component.html',
  styleUrl: './spacer.component.css'
})
export class SpacerComponent {

  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  get sizeClass() {
    return {
      xs: 'm-6',
      sm: 'm-8',
      md: 'm-12',
      lg: 'm-15',
      xl: 'm-20',
    }[this.size];
  }
}
