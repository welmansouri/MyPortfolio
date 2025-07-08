import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import {MatDividerModule} from '@angular/material/divider';

interface Bubble {
  left: string;
  width: string;
  height: string;
  duration: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ToolbarComponent,ProfileComponent,TitleComponent,MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    bubbleArray: Bubble[] = [];

  title = 'myportfolio';
  activeLink='about';
  currentHeader = 'À propos';
  navigationLinks = [
  { label: 'À propos', anchor: 'about' },
  { label: 'Parcours', anchor: 'resume' },       
  // { label: 'Projets', anchor: 'portfolio' },
  { label: 'Contact', anchor: 'contact' }
];


constructor() {
    this.generateBubbles();
  }

  onHeaderChange(newHeader: string) {
    const tmp =this.navigationLinks.find(link => link.anchor === newHeader);
    const label = tmp ? tmp.label : '';
    this.currentHeader = label;
}


  generateBubbles() {
    for (let i = 0; i < 30; i++) {
      this.bubbleArray.push({
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 20 + 10}px`,
        height: `${Math.random() * 20 + 10}px`,
        duration: `${Math.random() * 5 + 5}s`,
      });
    }
  }

  
}
