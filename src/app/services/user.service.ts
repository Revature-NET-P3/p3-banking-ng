import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserModel } from '../models/user-model';

//namespace REMOVE_THIS {
//  export const exampleUser: UserModel = { id: 60, userName: "Idk", email: "Idk", password: "Idk" }
//}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private user$ = new BehaviorSubject<UserModel>(null);
  
  constructor(private cookies: CookieService, private api: ApiService) { 
    // services cannot implement lifecycle methods
    this.init();
  }

  init(): void {
    //#region TODO Auth team fix this
    //this.cookies.set('User', JSON.stringify(REMOVE_THIS.exampleUser));
    //#endregion

    if (this.cookies.check('User')) {
      this.loggedIn$.next(true);
      var storedUser: UserModel = JSON.parse(this.cookies.get('User'));
      this.user$.next(storedUser);
    }
  }

  getUser() {
    return this.user$.getValue();
  }

  getUser$(){
    return this.user$.asObservable();
  }

  isLoggedIn(): boolean{
    console.log('logged in: ' + this.loggedIn$.getValue());
    return this.loggedIn$.getValue();
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  logout() {
    this.cookies.delete('User');
    this.user$.next(null);
    this.loggedIn$.next(false);
  }

  login(username: string, password: string){
    var token = this.api.login(username, password);
    this.api.getUserByUserName(username).subscribe(resp => {
        this.user$.next(resp);
      }
    )
    this.cookies.set('Token', JSON.stringify(token));
    this.loggedIn$.next(true);
  }

  
}
