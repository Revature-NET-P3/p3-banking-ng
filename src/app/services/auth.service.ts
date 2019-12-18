import { Injectable } from '@angular/core';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public getToken(username: string, password: string) {
    console.log('getting token', environment.auth0Token)
    return environment.auth0Token;
    //Logic to call auth0 would go here
  }

  HashPassword(password: string):string{
    console.log('password',password)
    let hash = CryptoJS.SHA256(password);
    let stringhash = hash.toString(CryptoJS.enc.Base64);
    console.log('hashed password',stringhash)
    return stringhash
  }
}