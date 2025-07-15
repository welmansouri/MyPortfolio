import { Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ContactComponent } from './sections/contact/contact.component';
export const routes: Routes = [

  { path: '', component: AboutComponent },               // Page d'accueil
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
