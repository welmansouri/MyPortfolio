import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-toolbar',
  imports: [CommonModule,RouterModule,MatIconModule,MatTooltipModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() activeLink:string='';
  @Input() links: { label: string; anchor: string,icon:string }[] = [];
  @Output() header = new EventEmitter<string>();

  setActiveLink(anchor:string){
    this.activeLink=anchor;
    this.header.emit(anchor);
  }


}
