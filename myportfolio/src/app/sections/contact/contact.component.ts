import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { TitleComponent } from '../../components/title/title.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, TitleComponent, SpacerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.injectKoalendar();
  }

  ngAfterViewInit(): void {
    this.injectKoalendar();
  }

  injectKoalendar(): void {
    const selector = '.calendar-placeholder'; // avec un point car c’est une classe
    const container = document.querySelector(selector);

    if (container && !container.querySelector('.inline-widget-koalendar')) {
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'inline-widget-koalendar';
      container.appendChild(widgetDiv);
    }

    const existingScript = document.querySelector('script[src="https://koalendar.com/assets/widget.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://koalendar.com/assets/widget.js';
      script.async = true;
      script.onload = () => {
        (window as any).Koalendar?.('inline', {
          url: 'https://koalendar.com/e/prenons-rendez-vous-4',
          selector: '.inline-widget-koalendar'
        });
      };
      document.body.appendChild(script);
    } else {
      (window as any).Koalendar?.('inline', {
        url: 'https://koalendar.com/e/prenons-rendez-vous-4',
        selector: '.inline-widget-koalendar'
      });
    }
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { fullName, email, message } = this.contactForm.value;

    emailjs.send(
      'service_qbxh218',
      'template_n2bdfpc',
      {
        from_name: fullName,
        from_email: email,
        message: message
      },
      'Z5LuDTCTDbU0C5VFg'
    ).then(() => {
      alert('Message envoyé avec succès ');
      this.contactForm.reset();
    }, (error) => {
      console.error('Erreur d’envoi :', error);
      alert("Une erreur s'est produite ");
    });
  }


}
