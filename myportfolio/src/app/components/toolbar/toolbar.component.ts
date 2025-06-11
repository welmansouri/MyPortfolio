import { Component,Input } from '@angular/core';
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

  setActiveLink(anchor:string){
    console.log("anchor" + anchor)
    this.activeLink=anchor;
        console.log("this.activeLink " + this.activeLink)

  }


}
