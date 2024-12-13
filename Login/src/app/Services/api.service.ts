import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string="http://localhost:5037/api/User"

  constructor(private httpClient:HttpClient) { }

  get(){
    return this.httpClient.get<any>(this.baseUrl)
  }
}
