import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/modules/module/user-model';

import {Location} from '@angular/common';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  
})
export class LoginUserComponent implements OnInit {

  @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef;
  @ViewChild('passwordInput', {static: true}) passwordInput: ElementRef;

  userName = "";
  password = "";


  users = [];
  enter = false;
 ;

  constructor(private user: UserService,
              private router: Router,
              private location: Location) { 

  }

  ngOnInit() {
   
  }

  onEnter() {
    this.enter = true;

    this.userName = this.userNameInput.nativeElement.value;
    this.password = this.passwordInput.nativeElement.value;

    var user: UserModel = {id: 1, userName: 'Blabla', email: 'b@gmail.com', password: 'test123'};
    
    if(user.userName === this.userName && user.password === this.password) {
      window.alert("Success");
      // this.router.navigate(['accounts']);
      this.location.path();

    } else {
      window.alert('Invalid user name or password');
    }
    
  }

}
