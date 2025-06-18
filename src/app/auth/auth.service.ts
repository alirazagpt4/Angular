import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(payload : {email: string , password: string}){
     
    return this.http.post('http://localhost:4000/api/login', payload);
  }

  
}
