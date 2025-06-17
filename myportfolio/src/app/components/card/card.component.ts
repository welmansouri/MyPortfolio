import { Component ,Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatCardModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title:string="";
  @Input() icon:string="";
  @Input() text:string="";
  @Input() type:string="";
  @Input() subTitle:string="";


}
