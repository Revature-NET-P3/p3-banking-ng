import { Component, OnInit, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AccountsService } from 'src/app/services/accounts.service';
import { TypeofExpr } from '@angular/compiler';

import { ACCOUNT } from '../account';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
  providers: [
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    AccountsService
  ]

})
export class AccountViewComponent implements OnInit {

  account = ACCOUNT;

  infoAccount: Account;
  showInfo  = false;

  constructor(private accounts: AccountsService) { }

  ngOnInit() {
  }

  getAccount(account: Account) {
    //logic here
    this.showInfo = true;
    this.infoAccount = account;
  }
}
