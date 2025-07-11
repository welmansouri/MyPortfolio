import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { PopupComponent } from '../../components/popup/popup.component';
@Component({
  selector: 'app-about',
  imports: [TitleComponent, CardComponent, CommonModule, ButtonComponent, SpacerComponent, PopupComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {

  selectedTestimonial: any = null;
  showModal: boolean = false;

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

  techs: { title: string; url: string; }[] = [
    {
      title: 'Java',
      url: 'img/techs/java-logo-vector-1.svg',
    },
    {
      title: 'Angular',
      url: 'img/techs/angular-icon-logo.svg',
    },
    {
      title: 'Spring Boot',
      url: 'img/techs/spring-3.svg',
    },
    {
      title: 'React Js',
      url: 'img/techs/react-1.svg',
    }
    ,
    {
      title: 'Tailwind css',
      url: 'img/techs/tailwind-css-2.svg',
    },
    {
      title: 'Vue Js',
      url: 'img/techs/vue-9.svg',
    },
    {
      title: 'MySql',
      url: 'img/techs/mysql-3.svg',
    },
    {
      title: 'PostgreSQL',
      url: 'img/techs/postgresql.svg',
    },
    {
      title: 'MongoDb',
      url: 'img/techs/mongodb-icon-1.svg',
    },
    {
      title: 'Docker',
      url: 'img/techs/docker.svg',
    },
    {
      title: 'Gitlab',
      url: 'img/techs/gitlab.svg',
    },
    {
      title: 'Jenkins',
      url: 'img/techs/Jenkins.svg',
    },
    {
      title: 'Kubernetes',
      url: 'img/techs/Kubernetes.svg',
    },
    {
      title: 'JUnit',
      url: 'img/techs/junit.svg',
    }
  ];

  testimonials: { title: string; icon: string; subTitle: string; text: string; }[] = [
    {
      title: 'Adrien Makarowicz',
      icon: "img/profile-icon.png",
      subTitle: 'Responsable informatique - Wedeal',
      text: 'J\'ai eu le plaisir d\'accompagner Wafae tout au long de son parcours au sein de WeDeal, à la fois en tant que tuteur pendant deux ans et comme responsable hiérarchique. Cela m’a permis d’observer de près sa progression et son évolution constante en tant que développeuse web fullstack et gestionnaire de projet.Au fil des années, Wafae a démontré une forte montée en compétence sur plusieurs fronts :Maîtrise technique : Elle a développé une compréhension approfondie de divers langages informatiques et des outils spécifiques à notre entreprise, renforçant ainsi son efficacité dans les projets techniques.Autonomie et analyse métier : Sa capacité à analyser nos activités, prendre du recul et proposer des solutions pertinentes a été un atout précieux pour notre organisation.Expertise en TMA : Sa rigueur et sa finesse dans la Tierce Maintenance Applicative ont permis d’assurer une continuité et une qualité de service irréprochables.Gestion de projet : Wafae s’est distinguée par sa proactivité dans le cadrage des besoins, sa participation active aux rituels SCRUM, et sa structuration rigoureuse des projets dans des outils tels que Jira et Notion.Au-delà de ses compétences techniques et organisationnelles, Wafae a su instaurer un climat de confiance et de collaboration grâce à son professionnalisme et son écoute attentive, tant au sein du service informatique que dans ses interactions avec d’autres départements.Je recommande vivement Wafae, non seulement pour ses compétences techniques et sa rigueur, mais également pour sa capacité à gérer efficacement des projets et à collaborer avec divers interlocuteurs. Elle sera un atout indéniable pour toute organisation.'
    }
  ];


  openModal(testimonial: any) {
    this.selectedTestimonial = testimonial;
    this.showModal = true;
  }


  download() {
    const link = document.createElement('a');
    link.href = 'pdf/wafae-EL-MANSOURI-CV.pdf';
    link.download = 'Resume.pdf';
    link.target = '_blank';
    link.click();
  }






}
