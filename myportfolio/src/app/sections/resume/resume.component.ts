import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ResumePartComponent } from '../../components/resume-part/resume-part.component';

@Component({
  selector: 'app-resume',
  imports: [ResumePartComponent,MatIconModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
