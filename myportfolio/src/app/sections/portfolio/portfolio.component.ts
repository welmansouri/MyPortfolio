import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { register } from 'swiper/element/bundle';
import { NgFor,NgIf } from '@angular/common';

register();

type Project = { title: string; img: string; desc: string; codeUrl?: string; demoUrl?: string };


@Component({
  selector: 'app-portfolio',
  standalone: true,

  imports: [ButtonComponent, NgFor,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PortfolioComponent {

  projects: Project[] = [
    {
      title: 'CV digital',
      img: 'img/portfolio/portfolio.png',
      desc: `Ce projet est une version digitalisée de mon CV, présenté sous forme de portfolio interactif,
développé avec Angular et Tailwind CSS. Il met en avant mes compétences techniques, mes projets et
permet aux visiteurs de me contacter facilement ou de réserver un rendez-vous.`,
      codeUrl: 'heheh',
      demoUrl: "bbbb"
    },
    {
      title: 'Dashboard',
      img: 'assets/img/portfolio/dashboard.png',
      desc: 'Temps réel • Charts'
    },
    {
      title: 'Réservation',
      img: 'assets/img/portfolio/booking.png',
      desc: 'Flutter • Stripe'
    }
  ];

 isNonEmptyUrl(val: unknown): val is string {
  return typeof val === 'string' && val.trim().length > 0;
}

openUrl(url: string) {
  window.open(url.trim(), '_blank');
}



}
