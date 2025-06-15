import { Component ,Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-popup',
  imports: [MatIconModule,CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
    @Input() title:string="";
    @Input() icon:string="";
    @Input() text:string="";
    @Input() type:string="";
    @Input() subTitle:string="";

}
