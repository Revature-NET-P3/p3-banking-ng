import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private loginService: ApiService;
  constructor(private login: ApiService ) { }

  // not sure how i want to do this yet...planning on using Auth0 for the token generation
  //placeholder for now. 
  public generateToken()
  {
    this.loginService = this.login; 
  }
}
