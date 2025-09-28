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
      img: 'img/portfolio/portfoliocv.png',
      desc: `Ce projet est une version digitalisée de mon CV, présenté sous forme de portfolio interactif,
développé avec Angular et Tailwind CSS. Il met en avant mes compétences techniques, mes projets et
permet aux visiteurs de me contacter facilement ou de réserver un rendez-vous.`,
      codeUrl: 'https://github.com/welmansouri/MyPortfolio',
    },
    {
      title: 'Coffee Connect',
      img: 'img/portfolio/coffe-connect.png',
      desc: `Coffee-Connectest une application mobile innovante qui permet de gérer et personnaliser la distribution automatique de café directement depuis son smartphone. L’utilisateur peut choisir la taille, configurer ses préférences, payer et récupérer sa boisson en toute simplicité.
Pensée pour l’avenir, la plateforme ne se limite pas seulement au café : elle ouvre la voie à la gestion connectée de tout type de distributeur automatique (snacks, boissons, produits divers), offrant une expérience fluide, moderne et 100 % mobile.`,
      codeUrl: 'https://github.com/welmansouri/CoffeeConnect',
      demoUrl:'https://appetize.io/app/b_w7uqkacrhgf4juuoh2ua6r2j3e',

},
    {
      title: 'Coffee Connect',
      img: 'img/portfolio/soup.png',
      desc: `L'application vise à piloter un lecteur de flux audio sous Android par la voix, dans le cadre d'un projet sur les architectures distribuées. L'objectif principal de cette application est de permettre aux utilisateurs d'interagir avec le lecteur en utilisant des commandes vocales formulées en langage naturel, sans contrainte sur la forme des messages. Par exemple, les utilisateurs pourront demander à l'application de lire des morceaux spécifiques en utilisant des instructions  telles que "Je veux écouter Hotel California".`,
}
  ];

 isNonEmptyUrl(val: unknown): val is string {
  return typeof val === 'string' && val.trim().length > 0;
}

openUrl(url: string) {
  window.open(url.trim(), '_blank');
}



}
