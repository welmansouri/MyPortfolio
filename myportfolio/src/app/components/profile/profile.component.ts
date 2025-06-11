import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    values: { key: string; value: string; img: string }[] = [
      {
        key: 'email',
        value: 'wafae@gmail.com',
        img: 'email'
      },
      {
        key: 'téléphone',
        value: '+212 600 123 456',
        img: 'phone'
      },
      {
        key: 'date de naissance',
        value: '20 mai 2002',
        img: 'calendar_month'
      },
      {
        key: 'location',
        value: 'Lyon, France',
        img: 'pin_drop'
      }
    ];
  socialLinks: { key: string; link: string; icon: string }[] = [
    {
      key: 'LinkedIn',
      link: 'https://www.linkedin.com/in/wafae-elmansouri/',
      icon: 'fa-linkedin'
    },
    {
      key: 'GitHub',
      link: 'https://github.com/wafae-mansouri',
      icon: 'fa-github'
    }
  ];


}
