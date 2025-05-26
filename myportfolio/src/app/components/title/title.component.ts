import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() text: string = '';
  @Input() size: 'small' | 'medium' | 'big' = 'medium';

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'text-sm';
      case 'big':
        return 'text-4xl';
      case 'medium':
      default:
        return 'text-2xl';
    }
  }


}
