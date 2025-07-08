import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-toolbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() activeLink:string='';
  @Input() links: { label: string; anchor: string }[] = [];
  @Output() header = new EventEmitter<string>();

  setActiveLink(anchor:string){
    this.activeLink=anchor;
    this.header.emit(anchor);
  }


}
