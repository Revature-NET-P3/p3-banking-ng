import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserModel } from '../models/user-model';
import { RegisterUserComponent } from '../components/register-user/register-user.component';

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
    this.cookies.delete('Token');
    this.user$.next(null);
    this.loggedIn$.next(false);
  }

  login(user: UserModel, token: string):Observable<boolean>{
    //let token;
    //var result = this.api.login(username, password);
    //console.log('result', result);
    //token = result;
    //console.log('token', token);
    //if (token != null && token != ""){
      //console.log('token recd.');
      //this.api.getUserByUserName(user).subscribe(resp => {
          this.user$.next(user);
          this.cookies.set('User', JSON.stringify(user))
        //}
      //)
      this.cookies.set('Token', JSON.stringify(token));
      this.loggedIn$.next(true);
      return this.loggedIn$.asObservable();
    // }
    // else {
    //  console.log('No token!!!');
    //}
  }
}
