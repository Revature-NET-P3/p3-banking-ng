import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(userCredentials){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var respObs = this.http.post<string>(this.url, userCredentials, { headers })
    return respObs;
  }

  
}
