import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestymonialsService {
  private apiUrl = 'https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient) {}

  getTestymonials() {
    return this.http.get(`${this.apiUrl}}/testymonials`);
  }
}
  