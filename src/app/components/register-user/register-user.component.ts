import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserModel} from '../../modules/module/user-model';

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
  

  constructor() { }

  ngOnInit() {
  }
  
  onRegister() {
    
    this.user.userName = this.userNameInput.nativeElement.value;
    this.user.email = this.emailInput.nativeElement.value;
    this.user.password = this.passwordInput.nativeElement.value;

    //this.user.confirmPassword = this.passwordConfirmInput.nativeElement.value;
    
  }
}
