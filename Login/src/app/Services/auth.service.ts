// auth.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:5037/api/User/";
  //static isloggedIn: any;
  private payload!:any;

  constructor(private http: HttpClient,private Router:Router) {
    this.payload=this.decodedtoken();
  }

  signup(userobj: any) {
    return this.http.post<any>(`${this.baseUrl}Registered`, userobj);
  }

  login(loginobj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginobj);
  }

  storetoken(tokenvalue: string) {
    localStorage.setItem('token', tokenvalue);
  }

  signout(){
    localStorage.clear()
    this.Router.navigate(['Login'])
  }
  gettoken() {
    return localStorage.getItem('token');
  }

  isloggedIn(): boolean {
    
    if (typeof localStorage !== null) {
    
      return !!localStorage.getItem('token');
    } else {
      
      console.warn('localStorage is not available. This component may not work as expected.');
      return false;
    }
  }

  decodedtoken(){
  const jwtHelper=new JwtHelperService();
  const token=this.gettoken()!;
  console.log(jwtHelper.decodeToken(token));
  return jwtHelper.decodeToken(token);
   }


   getfullname(){
    if(this.payload)
    return this.payload.userName;
   }
   getrolename(){
    if(this.payload)
    return this.payload.role;
   }
}
