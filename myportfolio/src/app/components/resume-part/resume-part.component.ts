import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-part',
  imports: [CommonModule],
  templateUrl: './resume-part.component.html',
  styleUrl: './resume-part.component.css'
})
export class ResumePartComponent {
  @Input() title: string = ""
  @Input() subTitle: string = ""
  @Input() text: string = ""
  @Input() date: string = ""
  @Input() isRight: string = "false"



}
