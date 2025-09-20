import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { ResumePartComponent } from '../../components/resume-part/resume-part.component';

@Component({
  selector: 'app-resume',
  imports: [ResumePartComponent,MatIconModule,CommonModule,ButtonComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isRight:boolean=false;


    educationValues: { key:number,title: string; subTitle: string; text: string; date:string }[] = [
  {
    key: 0,
    title: "Master Ingénierie Logicielle des Sociétés Numériques (CERI)",
    subTitle: "Université d’Avignon — Avignon, France",
    text: "Diplôme obtenu avec la mention Très Bien.",
    date: "2025"
  },
  {
    key: 1,
    title: "Licence Informatique (CERI)",
    subTitle: "Université d’Avignon — Avignon, France",
    text: "Diplôme obtenu avec la mention Bien.",
    date: "2023"
  },
  {
    key: 2,
    title: "Développeuse Full-Stack",
    subTitle: "Wedeal — Mollégès, France (09/2022 – Aujourd’hui)",
    text:
      "Participation au développement de solutions logicielles liées aux bornes connectées (supervision, pilotage à distance, Click & Collect). " +
      "Conception d’architectures distribuées et développement full-stack (Java, Node.js, Angular, React, React Native). " +
      "Mise en place d’une base de données centralisée avec Supabase, gestion du temps réel, optimisation des performances et internationalisation.",
    date: "2022"
  },
  {
    key: 3,
    title: "Baccalauréat Scientifique",
    subTitle: "Avignon, France",
    text: "Mention Très Bien ; admission à l’Université d’Avignon (CERI).",
    date: "2020"
  },
  {
    key: 4,
    title: "Avant 2020",
    subTitle: "",
    text:
      "Avant mes études supérieures, j’étais passionnée par l’informatique — en particulier la programmation —, " +
      "ce qui m’a naturellement orientée vers le développement web.",
    date: "< 2020"
  }
];


  experienceValues: { title: string; subTitle: string; text: string;  }[] = [
    {
      title: 'Développeuse Full Stack',
      subTitle:'Wedeal 09/2022 – aujourd\'hui | Mollégès',
      text:'Chez Wedeal, j’ai participé au développement de plusieurs solutions logicielles liées aux bornes connectées : supervision, pilotage à distance, Click & Collect, etc. J’ai contribué à la conception d’architectures distribuées, au développement full stack (Java, Node.js, Angular, React, React Native), ainsi qu’à la mise en place d’une base de données centralisée avec Supabase. J’ai travaillé sur des problématiques variées comme le monitoring temps réel, la communication entre systèmes embarqués et applications web, l’optimisation de performance, et la gestion multilingue/multidevise. Cette expérience m’a permis d’intervenir sur l’ensemble du cycle de vie applicatif, en lien direct avec les enjeux techniques et métiers.'
    }
  ];


  interestValues: { title: string; subTitle: string; text: string;  }[] = [
    {
      title: 'E-commerce & entrepreneuriat',
      subTitle:'',
      text:'Passionnée par le e-commerce et l’entrepreneuriat, j’aime concevoir des sites marchands avec WordPress et Shopify, alliant technique, design et stratégie digitale.'
    }
  ];

  download() {
  const link = document.createElement('a');
  link.href = 'pdf/wafae-EL-MANSOURI-CV.pdf';
  link.download = 'Resume.pdf';
  link.target = '_blank';   
  link.click();
}

  setIsRight() {
    this.isRight=!this.isRight;
  }

}
