import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { AuthService } from '../../services/auth.service';

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
  

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  
  onRegister() {
    
    this.user.userName = this.userNameInput.nativeElement.value;
    this.user.email = this.emailInput.nativeElement.value;
    this.user.password = this.passwordInput.nativeElement.value;
    this.auth.login(this.user.userName,this.user.password);
    
    
    
  }
}
