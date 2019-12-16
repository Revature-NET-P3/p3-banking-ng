import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account, AccountType } from '../../models/account';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css'],

  providers: [AccountsService]
  
})
export class CreateNewAccountComponent implements OnInit {

  newAccount: Account = null;
  openCreate: boolean = false;
  filterOptions = AccountType.AllNames();
  //accountType:AccountType;
  constructor(private apiSvc: ApiService) { 
    //currentAccount: Account = null;
  }

  ngOnInit() {
  }

  showSelectedType(accType: AccountType){
    this.openCreate = true;
  }

  createAccount(newAcc: Account){
    newAcc.userId = null;
    newAcc.accountTypeId = 1;
    newAcc.balance = null;
    newAcc.createDate = null;
    newAcc.isClosed = false;
    
    //this.apiSvc
    
  }

}
/*
accountToRecreate (account: Account){

}


    id: number;         - auto
    userId: number;     - assing
    accountTypeId: number;   - select
    balance: number;    - Initial Balance
    createDate: Date;   - Set auto 
    isClosed: boolean;  - true while submitting


*/
//TODO assign values to userId using current user
//accountId
//createDate
//isClosed = true
//accountTypeId