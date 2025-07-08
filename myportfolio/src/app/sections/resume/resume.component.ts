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


    educationValues: { title: string; subTitle: string; text: string;  }[] = [
    {
      title: 'Centre d\'Enseignementet de Rechercheen Informatique',
      subTitle:'2023 – Aujourd’hui | Avignon, France',
      text:'Master en Ingénierie Logicielle des Sociétés Numériques'
    },
     {
      title: 'Centre d\'Enseignementet de Rechercheen Informatique',
      subTitle:'2020 – 2023 | Avignon, France',
      text:'Licence en informatique'
    },
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


}
