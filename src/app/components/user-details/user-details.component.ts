import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user-model';

export interface IUser{
  Id: number,
  Username: string,
  Email: string,
 // PasswordHash: string
}

const HARDCODED_USER: IUser[] = [{
  Id: 4,
  Username: 'test',
  Email: 'test@user.com',
//  PasswordHash: 'password'
}];

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  dataSource: IUser[];
  user: UserModel;
  Username = "John Doe"
  Email = "test@user.com"
  time: string;
  displayedColumns: string[] = ['Id', 'Username', 'Email', 'PasswordHash'];
  
  constructor(private _userService: UserService) { }

  ngOnInit() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    this.user = this._userService.getUser();
    this.Username = this.user.username;
    this.Email = this.user.email;
    this.time = dateTime;
    this.dataSource = [{
      Id: this.user.id,
      Username: this.user.username,
      Email: this.user.email
    }];
    

    console.log("SHOWING USER:" + this.user.username);
    console.log("SHOWING USER:" + this.user.email);
    console.log("SHOWING USER:" + this.user.id);

  }

}
