import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-part',
  imports: [],
  templateUrl: './resume-part.component.html',
  styleUrl: './resume-part.component.css'
})
export class ResumePartComponent {
  @Input() title: string = ""
  @Input() subTitle: string = ""
  @Input() text: string = ""


}
