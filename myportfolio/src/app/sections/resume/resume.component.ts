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
      title: 'Java',
      subTitle:'hhh',
      text:'Application rigoureuse des principes de code propre (Clean Code, SOLID), couverture de tests, relecture systématique, documentation claire et collaboration active.'
    },
     {
      title: 'Java',
      subTitle:'hhhh',
      text:'hhhh'
    },
  ];


}
