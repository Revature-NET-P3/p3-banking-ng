import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../account';

@Component({
  selector: 'app-checkingAccount',
  templateUrl: './checkingAccount.component.html',
  styleUrls: ['./checkingAccount.component.css']
})
export class CheckingAccountComponent implements OnInit {
  @Input() account: Account;
  @Input('master') mastername: string;

  constructor() { }

  ngOnInit() {
  }

}
