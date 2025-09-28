import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { ResumeComponent } from '../resume/resume.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { Navigation_Links } from '../../components/shared/constants'
import {RevealOnScrollDirective} from '../../directives/reveal-on-scroll.directive'
export interface Skill {
  name: string;
  techs: string[];
}
interface Bubble {
  left: string;
  width: string;
  height: string;
  duration: string;
}

@Component({
  selector: 'app-about',
  imports: [TitleComponent, ContactComponent,RevealOnScrollDirective, TranslateModule, CardComponent, CommonModule, ResumeComponent, ButtonComponent, SpacerComponent, PopupComponent, PortfolioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  bubbleArray: Bubble[] = [];
  selectedTestimonial: any = null;
  showModal: boolean = false;
  navigationLinks: { label: string; anchor: string, icon: string, type: string }[] =  Navigation_Links;



    constructor(private navigation: NavigationService) {}


skills: Skill[] = [
  {
    name: "Programmation",
    techs: [
      "/assets/img/icons/java/java-original.svg",
      "/assets/img/icons/python/python-original.svg",
      "/assets/img/icons/javascript/javascript-original.svg",
      "/assets/img/icons/typescript/typescript-original.svg",
      "/assets/img/icons/mysql/mysql-original.svg" 
    ]
  },
  {
    name: "Front-end & Mobile",
    techs: [
      "/assets/img/icons/angular/angular-original.svg",
      "/assets/img/icons/vuejs/vuejs-original.svg",
      // "/assets/img/icons/react/react-original.svg",    
      "/assets/img/icons/nextjs/nextjs-original.svg",
      "/assets/img/icons/redux/redux-original.svg",
      "/assets/img/icons/tailwindcss/tailwindcss-original.svg",
      "/assets/img/icons/vuetify/vuetify-original.svg"
    ]
  },
  {
    name: "Back-end & Bases de données",
    techs: [
      "/assets/img/icons/spring/spring-original.svg",
      "/assets/img/icons/hibernate/hibernate-original.svg",
      "/assets/img/icons/nodejs/nodejs-original.svg",
      "/assets/img/icons/postgresql/postgresql-original.svg",
      "/assets/img/icons/mysql/mysql-original.svg",
      "/assets/img/icons/mongodb/mongodb-original.svg",
      //"/assets/img/icons/supabase/supabase-original.svg"
    ]
  },
  {
    name: "DevOps, Cloud & Qualité",
    techs: [
      "/assets/img/icons/gitlab/gitlab-original.svg",
      "/assets/img/icons/kubernetes/kubernetes-plain.svg",
      "/assets/img/icons/jenkins/jenkins-original.svg",
      "/assets/img/icons/docker/docker-original.svg",
      // "/assets/img/icons/sonarqube/sonarqube.svg",          // custom si pas dans devicon
      "/assets/img/icons/maven/maven-original.svg",
       "/assets/img/icons/tomcat/tomcat-original.svg",          

      "/assets/img/icons/gradle/gradle-original.svg",
      "/assets/img/icons/azure/azure-original.svg",
      "/assets/img/icons/junit/junit-original.svg",
            "/assets/img/icons/jupyter/jupyter-original.svg",

      // "/assets/img/icons/jacoco/jacoco.png",                // custom
      "/assets/img/icons/jira/jira-original.svg",
      "/assets/img/icons/postman/postman-original.svg",
            "/assets/img/icons/wordpress/wordpress-original.svg",

      "/assets/img/icons/kibana/kibana-original.svg",                  
      // "/assets/img/icons/powerbi/powerbi.png"               // custom
    ]
  }
];
  values: { title: string; text: string; icon: string }[] = [
    {
      title: 'Expertise technique',
      text: 'Maîtrise de différents environnements et frameworks, avec la capacité d’adapter la bonne technologie au bon projet.',
      icon: 'fa-code'
    },
    {
      title: 'Gestion des données',
      text: 'Expérience solide dans la conception, la structuration et l’optimisation des bases de données pour garantir fiabilité et performance.',
      icon: 'fa-database'
    },
    {
      title: 'Déploiement & sécurité',
      text: 'Mise en place de solutions stables, sécurisées et prêtes à évoluer, en respectant les bonnes pratiques de qualité et de fiabilité.',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Veille technologique',
      text: 'Toujours curieuse et en quête de nouveautés, j’aime explorer les tendances du digital pour rester à la pointe et enrichir mes pratiques.',
      icon: 'fa-lightbulb'
    },
    {
      title: 'Collaboration & agilité',
      text: 'Habituée aux méthodes agiles, je valorise l’esprit d’équipe, la communication et l’intelligence collective pour mener les projets vers le succès.',
      icon: 'fa-users'
    }
  ];




  testimonials: { title: string; icon: string; subTitle: string; text: string; }[] = [
    {
      title: 'Adrien Makarowicz',
      icon: "assets/img/profile-icon.png",
      subTitle: 'Responsable informatique - Wedeal',
      text: 'J\'ai eu le plaisir d\'accompagner Wafae tout au long de son parcours au sein de WeDeal, à la fois en tant que tuteur pendant deux ans et comme responsable hiérarchique. Cela m’a permis d’observer de près sa progression et son évolution constante en tant que développeuse web fullstack et gestionnaire de projet.Au fil des années, Wafae a démontré une forte montée en compétence sur plusieurs fronts :Maîtrise technique : Elle a développé une compréhension approfondie de divers langages informatiques et des outils spécifiques à notre entreprise, renforçant ainsi son efficacité dans les projets techniques.Autonomie et analyse métier : Sa capacité à analyser nos activités, prendre du recul et proposer des solutions pertinentes a été un atout précieux pour notre organisation.Expertise en TMA : Sa rigueur et sa finesse dans la Tierce Maintenance Applicative ont permis d’assurer une continuité et une qualité de service irréprochables.Gestion de projet : Wafae s’est distinguée par sa proactivité dans le cadrage des besoins, sa participation active aux rituels SCRUM, et sa structuration rigoureuse des projets dans des outils tels que Jira et Notion.Au-delà de ses compétences techniques et organisationnelles, Wafae a su instaurer un climat de confiance et de collaboration grâce à son professionnalisme et son écoute attentive, tant au sein du service informatique que dans ses interactions avec d’autres départements.Je recommande vivement Wafae, non seulement pour ses compétences techniques et sa rigueur, mais également pour sa capacité à gérer efficacement des projets et à collaborer avec divers interlocuteurs. Elle sera un atout indéniable pour toute organisation.'
    }
  ];
  triangleImages: { src: string; alt: string; top: string; left: string }[] = [];

  ngOnInit() {
    this.generateBubbles();

    const basePositions = [
      { top: '0%', left: '50%' },   // haut centre
      { top: '85%', left: '0%' },   // bas gauche
      { top: '85%', left: '85%' }   // bas droite
    ];

    const sources = [
      { src: '/assets/img/profile/p1.png', alt: 'p1' },
      { src: '/assets/img/profile/p2.png', alt: 'p2' },
      { src: '/assets/img/profile/p3.png', alt: 'p3' }
    ];

    // Mélanger aléatoirement les positions
    const shuffled = basePositions.sort(() => 0.5 - Math.random());

    // Assigner une position à chaque image
    this.triangleImages = sources.map((img, i) => ({
      ...img,
      top: shuffled[i].top,
      left: shuffled[i].left
    }));
  }




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

  generateBubbles() {
    for (let i = 0; i < 30; i++) {
      this.bubbleArray.push({
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 20 + 10}px`,
        height: `${Math.random() * 20 + 10}px`,
        duration: `${Math.random() * 5 + 5}s`,
      });
    }
  }

  scrollTo(anchor: string) {
  this.navigation.scrollTo(anchor)
}




}
