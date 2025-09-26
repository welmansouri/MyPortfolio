import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ThemeService } from '../../services/theme.service';
import { NavigationService } from '../../services/navigation/navigation.service';
@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, RouterModule, MatIconModule, MatTooltipModule, ButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() activeLink: string = '';
  @Input() links: { label: string; anchor: string, icon: string, type: string }[] = [];
  @Output() header = new EventEmitter<string>();
 @Input() currentLanguage: 'fr' | 'en' = 'fr';
 isMenuOpen = false;

  @Output() lang = new EventEmitter<'fr' | 'en'>();
  isDark: boolean = false;
  constructor(public theme: ThemeService,private navigation:NavigationService) {
    this.isDark = this.theme.getDark();

  }

  ngOnInit() {
    this.theme.setDark(this.isDark);
  }


  toggleTheme() {
    this.isDark = !this.isDark;
    this.theme.toggle();
  }

  setActiveLink(anchor: string) {
    this.activeLink = anchor;
    this.header.emit(anchor);
  }

toggleLang() {
    const next = this.currentLanguage === 'fr' ? 'en' : 'fr';
    this.currentLanguage = next;   
    this.lang.emit(next);          
  }
  
scrollTo(anchor: string) {
  this.navigation.scrollTo(anchor)
}


}
