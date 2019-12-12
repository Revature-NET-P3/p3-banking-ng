import { Component, OnInit, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AccountsService } from 'src/app/services/accounts.service';
import { TypeofExpr } from '@angular/compiler';

import { MOCK_ACCOUNTS, CheckingAccount, BusinessAccount, LoanAccount, TermAccount, Account } from '../../models/account';

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
  //menuTypes = [typeof CheckingAccount, typeof BusinessAccount, typeof LoanAccount, typeof TermAccount]
  filterOptions = ["Checking", "Business", "Loan", "CD"]
  accounts = this.accountsSvc.getAccounts<CheckingAccount>();
  master = 'Account - Details';

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
    var type;
    switch(option){
      case "Checking":
        type = CheckingAccount;
        break;
      case "Business":
        type = BusinessAccount;
        break;
      case "Loan":
        type = LoanAccount;
        break;
      case "CD":
        type = TermAccount;
        break;
    }
    this.accounts = this.accountsSvc.getAccounts<typeof type>();
    console.log(option);
  }
}
