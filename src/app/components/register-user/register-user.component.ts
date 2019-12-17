import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: UserModel;
  
  @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef; 
  @ViewChild('userNameInput', {static: true}) emailInput: ElementRef;
  @ViewChild('userNameInput', {static: true}) passwordInput: ElementRef;
  @ViewChild('userNameInput', {static: true}) passwordConfirmInput: ElementRef;
  

  constructor(private newUser: ApiService, private loginNewUser: UserService) { }

  ngOnInit() {
  }
  
  onRegister() {
    
    this.user.userName = this.userNameInput.nativeElement.value;
    this.user.email = this.emailInput.nativeElement.value;
    this.user.password = this.passwordInput.nativeElement.value;
    var success = this.newUser.createUser(this.user);
    if(success)
    {
      this.loginNewUser.login(this.user.userName, this.user.password);
    }
    else{
      return;
    }
    //this.user.confirmPassword = this.passwordConfirmInput.nativeElement.value;
    
  }
}
