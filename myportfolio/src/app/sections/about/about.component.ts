import { Component,Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [TitleComponent,CardComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    values: { title: string; text: string; icon: string }[] = [
    {
      title: 'Conception back-end',
      text: 'Modélisation claire de la logique métier, structuration d’architectures évolutives et sécurisées, optimisation des accès aux données et des performances serveur.',
      icon: 'fa-database'
    },
    {
      title: 'Développement front-end',
      text: 'Création d’interfaces intuitives, accessibles et réactives. Attention portée à l’expérience utilisateur, à la maintenabilité du code et à la cohérence visuelle.',
      icon: 'fa-desktop'
    },
    {
      title: 'Déploiement & automatisation',
      text: 'Mise en place de workflows de déploiement fluides, environnement de développement reproductible, gestion des versions et des livrables en continu.',
      icon: 'fa-rocket'
    },
    {
      title: 'Qualité & bonnes pratiques',
      text: 'Application rigoureuse des principes de code propre (Clean Code, SOLID), couverture de tests, relecture systématique, documentation claire et collaboration active.',
      icon: 'fa-check-circle'
    }
  ];

   techs: { title: string; url: string;  }[] = [
    {
      title: 'Java',
      url: '/img/techs/java-logo-vector-1.svg',
    },
     {
      title: 'Java',
      url: '/img/techs/java-logo-vector-1.svg',
    },
   {
      title: 'Java',
      url: '/img/techs/java-logo-vector-1.svg',
    },
    {
      title: 'Java',
      url: '/img/techs/java-logo-vector-1.svg',
    }
  ];

}
