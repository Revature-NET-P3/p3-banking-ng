import { Component, OnInit } from '@angular/core';

export interface IUser{
  Id: number,
  Username: string,
  Email: string,
  PasswordHash: string
}

const HARDCODED_USER: IUser[] = [{
  Id: 4,
  Username: 'test',
  Email: 'test@user.com',
  PasswordHash: 'password'
}];

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  dataSource = HARDCODED_USER;
  displayedColumns: string[] = ['Id', 'Username', 'Email', 'PasswordHash'];
  constructor() { }

  ngOnInit() {
  }

}
