import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: Observable<boolean> = this.userSvc.isLoggedIn$();

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

  login(){
    //TODO Auth update (add redirect etc.)
    this.userSvc.login(null);
  }

  logout(){
    this.userSvc.logout();
  }

}
