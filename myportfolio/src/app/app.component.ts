import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import {MatDividerModule} from '@angular/material/divider';
import { PopupComponent } from './components/popup/popup.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ToolbarComponent,ProfileComponent,TitleComponent,MatDividerModule,PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showModal:boolean=false;
  title = 'myportfolio';
  activeLink='about'
  navigationLinks = [
  { label: 'À propos', anchor: 'about' },
  { label: 'Parcours', anchor: 'resume' },       
  { label: 'Projets', anchor: 'portfolio' },
  { label: 'Contact', anchor: 'contact' }
];


  
}
