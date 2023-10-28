import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiURl = 'http://upskilling-egypt.com:3000/contact';
 
 
  constructor(private http: HttpClient) {}

  requestData(user: any): Observable<any> {
    return this.http.post(`${this.apiURl}}`,user)
  }
}
