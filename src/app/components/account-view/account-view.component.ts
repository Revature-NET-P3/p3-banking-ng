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
  menuTypes = [typeof CheckingAccount, typeof BusinessAccount, typeof LoanAccount, typeof TermAccount]
  filterOptions = ["None", "Checking", "Business", "Loan", "CD"]
  accounts = MOCK_ACCOUNTS;
  master = 'Account - Details';

  infoAccount: Account;

  constructor(private accountsSvc: AccountsService) { }

  ngOnInit() {
  }

  getAccount(account: Account) {
    //logic here
    this.infoAccount = account;
  }

  filter(option: string){
    switch(option){
      //find type
    }
//    accounts = this.accountsSvc.getAccounts<type>();
    console.log(option);
  }
}
