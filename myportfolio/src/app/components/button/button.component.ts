import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = '';
  @Input() icon: string = '';

  @Output() actionHandler = new EventEmitter<void>();

  onClick() {
    this.actionHandler.emit();
  }

}
