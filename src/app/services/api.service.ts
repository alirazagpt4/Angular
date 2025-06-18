import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  // 🔹 Users get karne wali method
  getUsers(): Observable<any> {
    const token = localStorage.getItem('token')

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${token}`
    )
    return this.http.get(`${this.baseUrl}/users` , {headers});
  }
}
