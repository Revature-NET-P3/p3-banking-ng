import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<any>('');
  
  constructor(private cookies: CookieService) { }

  ngOnInit(): void {
    if (this.cookies.check('User')) {
      this.loggedIn.next(true);
      this.user.next(this.cookies.get('User'));
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
    this.user.next('');
    this.loggedIn.next(false);
  }

  login(user){
    this.user.next(user);
    this.cookies.set('User', user);
    this.loggedIn.next(true);
    //TODO Use api.service.ts
  }



}
