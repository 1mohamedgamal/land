import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { User } from '../user';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9 ]{11}'),
      ]),
    });
  }

  onSubmit( ) {
    if (this.contactForm.valid) {
      // Get the form data from the FormGroup's value property
      const formData = this.contactForm.value;

      // Call the API service with the form data
      this.contactService.sendContactForm(formData).subscribe((response) => {
        alert('User added successfully');
      });
    } else {
      // Handle form validation errors
      console.error('Form validation error');
    }
  }
}
