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
    if (this.cookies.check('UserId')) {
      this.loggedIn.next(true);
      this.user.next(this.cookies.get('UserId'));
    }
  }

  setUserID(id: string) {
    this.cookies.set('UserId', id)
    if (id != null) this.loggedIn.next(true);
    console.log("from the user service", this.cookies.get('UserId'))
  }

  getUserID() {
    return this.cookies.get('UserId');
  }

  isLoggedIn(): Observable<boolean> { //TODO Make Observable
    return this.loggedIn.asObservable();
  }

  logOut() {
    this.cookies.set('UserId', '');
    this.loggedIn.next(false);
  }

}
