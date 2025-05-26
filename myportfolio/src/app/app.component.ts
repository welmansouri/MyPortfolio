import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myportfolio';
  navigationLinks = [
  { label: 'Accueil', anchor: 'home' },
  { label: 'À propos', anchor: 'about' },
  { label: 'Projets', anchor: 'projects' },
  { label: 'Contact', anchor: 'contact' }
];

}
