import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  public login(userName:string, password:string)
  {
   // return this.httpClient.post(//api login url)
  }
}
