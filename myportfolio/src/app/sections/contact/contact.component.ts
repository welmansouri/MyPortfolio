import { Component ,} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

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
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactForm :FormGroup;

    matcher = new MyErrorStateMatcher();

    constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
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
