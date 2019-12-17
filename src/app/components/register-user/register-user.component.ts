import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: UserModel;
  
  @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef; 
  @ViewChild('emailInput', {static: true}) emailInput: ElementRef;
  @ViewChild('passwordInput', {static: true}) passwordInput: ElementRef;
  @ViewChild('passwordConfirmInput', {static: true}) passwordConfirmInput: ElementRef;
  

  constructor(private newUser: ApiService, private loginNewUser: UserService, private location: Location) { }

  ngOnInit() {
  }
  
  onRegister() {
    console.log("registering");
    this.user = new UserModel();
    this.user.userName = this.userNameInput.nativeElement.value;
    this.user.email = this.emailInput.nativeElement.value;
    this.user.passwordHash = this.passwordConfirmInput.nativeElement.value;
    //return window.location.origin;
    console.log("password is:" + this.user.passwordHash);
    console.log("email is:" + this.user.email);

    var success = this.newUser.createUser(this.user);
    console.log("username is:" + this.user.userName);
    // success.pipe(first()).subscribe(resp => {
    //       if (resp){
    //         console.log("Success!");
    //       }
    //       else{
    //         console.log("Failure!");
    //       }     
    //   })
    success.toPromise().then(data => {
      if(data)
      {
        console.log("Success!");
        alert("You've successfully registered as a customer!");
        this.location.path();
      }
      else{
        console.log("Failure");
        alert("A user with this username or email already exists!");
      }
    }).catch((error) => {
      const errorSub = throwError (error);
      errorSub.subscribe();
    });
    // else{
    //   return;
    // }
    //this.user.confirmPassword = this.passwordConfirmInput.nativeElement.value;
    
 
}
}
