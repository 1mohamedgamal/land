import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://upskilling-egypt.com:3000/contact';

  constructor(private http: HttpClient) {}

  // Define a function to make a POST request to your API
  sendContactForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
