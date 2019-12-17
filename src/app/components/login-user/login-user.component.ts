import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user-model';

import {Location} from '@angular/common';

import {Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';


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
              private api: ApiService,
              private auth: AuthService,
              private router: Router,
              private location: Location) { 

  }

  ngOnInit() {
   
  }

  onEnter() {
    this.enter = true;

    this.userName = this.userNameInput.nativeElement.value;
    this.password = this.passwordInput.nativeElement.value;
    let passHash = this.auth.HashPassword(this.password);
    let apiResult = this.api.login(this.userName, passHash);
    apiResult.toPromise().then(data => 
      {
        console.log('promise data:', data);
        if (data){
          let token = environment.auth0Token//this.auth.getToken(this.userName, this.password)
          console.log('token:', token)
          let VerifiedUser = this.api.getUserByUserName(this.userName)
          console.log('User:', VerifiedUser);
          VerifiedUser.toPromise().then(VUser =>{
            console.log('user:', VUser);
            this.user.login(VUser, token).toPromise().then(status => {
              if(status){
                console.log('status:', status);
                window.alert("Success");
                // this.router.navigate(['accounts']);
                this.location.path();
              } else {
                window.alert('Invalid user name or password');
                //this.router.navigateByUrl(['login']);
              }
            });

          })

        }
      }
    );
  }
}
