import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import {MatDividerModule} from '@angular/material/divider';
import { ThemeService } from './services/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {Navigation_Links} from './components/shared/constants'


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,TranslateModule,CommonModule,ToolbarComponent,ProfileComponent,TitleComponent,MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'myportfolio';
  activeLink='about';
  currentHeader = 'À propos';
  currentLang: 'fr' | 'en' = 'fr';
  private sub?: Subscription;


  navigationLinks = Navigation_Links;


constructor(public t:TranslateService) {
    const saved = (localStorage.getItem('lang') as 'fr'|'en'|null) ?? this.t.getBrowserLang() as any;
    const initial = saved === 'en' ? 'en' : 'fr';
    this.t.use(initial);
    this.currentLang = initial;

    this.sub = this.t.onLangChange.subscribe(e => {
      this.currentLang = (e.lang === 'en' ? 'en' : 'fr');
    });
  }
 setLang(lang: 'fr'|'en') {
    if (lang === this.currentLang) return;
    this.currentLang=lang;
    this.t.use(lang);
    localStorage.setItem('lang', lang);
  }
 onLangChange(lang: 'fr'|'en') {
    this.currentLang = lang;
    this.t.use(lang);
    localStorage.setItem('lang', lang);
  }
  ngOnDestroy() { this.sub?.unsubscribe(); }

  onHeaderChange(newHeader: string) {
    const tmp =this.navigationLinks.find(link => link.anchor === newHeader);
    const label = tmp ? tmp.label : '';
    this.currentHeader = label;
}




  
}
