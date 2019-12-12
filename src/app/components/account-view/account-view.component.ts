import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { ACCOUNT } from '../account';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]

})
export class AccountViewComponent implements OnInit {

  account = ACCOUNT;
  master = 'Account - Details';

  infoAccount: Account;

  constructor() { }

  ngOnInit() {
  }

  getAccount(account: Account) {
    //logic here
    this.infoAccount = account;
  }
}
