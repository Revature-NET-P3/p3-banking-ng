import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<UserModel>(null);
  
  constructor(private cookies: CookieService, private api: ApiService) { }

  ngOnInit(): void {
    if (this.cookies.check('User')) {
      this.loggedIn.next(true);
      this.user.next(JSON.parse(this.cookies.get('User')));
    }
  }

  getUser() {
    return this.user.getValue();
  }

  observeUser(){
    return this.user.asObservable();
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.cookies.set('User', '');
    this.user.next(null);
    this.loggedIn.next(false);
  }

  login(user){
    this.user.next(user);
    this.cookies.set('User', JSON.stringify(user));
    this.loggedIn.next(true);
    this.api.login(user);
  }



}
