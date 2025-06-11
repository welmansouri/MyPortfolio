import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToolbarComponent,ProfileComponent,TitleComponent,MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myportfolio';
  activeLink='about'
  navigationLinks = [
  { label: 'À propos', anchor: 'about' },
  { label: 'Parcours', anchor: 'resume' },       
  { label: 'Projets', anchor: 'portfolio' },
  { label: 'Contact', anchor: 'contact' }
];


  
}
