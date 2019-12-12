import { Component, OnInit, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AccountsService } from 'src/app/services/accounts.service';
import { TypeofExpr } from '@angular/compiler';

import { MOCK_ACCOUNTS, CheckingAccount, BusinessAccount, LoanAccount, TermAccount, Account, AccountType } from '../../models/account';

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

  oneAtATime: boolean = true;
  currentAccount: Account = null;
  filterOptions = ["Checking", "Business", "Loan", "CD"]
  accounts = this.accountsSvc.getAccounts(AccountType.Checking);
  master = 'Account - Details';
  isChecking: boolean = false;
  isBusiness: boolean = false;
  isLoan: boolean = false;
  isCD: boolean = false;

  constructor(private accountsSvc: AccountsService) { }

  ngOnInit() {
  }

  getAccount(account: Account) {
    //logic here
    this.currentAccount = account;
  }

  openChange(account: Account){
    if(account == this.currentAccount)
      this.currentAccount = null;
  }

  filter(option: string){
    var type = AccountType[option];
    this.currentAccount = null;
    this.accounts = this.accountsSvc.getAccounts(type);
  }
}
