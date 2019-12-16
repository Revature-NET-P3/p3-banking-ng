import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account, AccountType } from '../../models/account';
import { ApiService } from 'src/app/services/api.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css'],

  providers: [
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    AccountsService, ApiService
  ]
  
})
export class CreateNewAccountComponent implements OnInit {

  newAccount: Account = null;
  openCreate: boolean = false;
  filterOptions = AccountType.AllNames();
  selectedAccountType:string = "Select an Account Type";

  //accountType:AccountType;
  constructor(private apiSvc: ApiService) { 
    //currentAccount: Account = null;
  }

  ngOnInit() {
  }

  setAccountType(typeAcc: string){
    this.selectedAccountType = typeAcc;
  }

  showSelectedType(accType: AccountType){
    this.openCreate = true;
  }

  createAccount(){
    //newAcc = this.newAccount;
    this.newAccount.userId = null;
    this.newAccount.accountTypeId = 1;
    this.newAccount.balance = null;
    this.newAccount.createDate = null;
    this.newAccount.isClosed = false;
    if(this.newAccount.userId !=null)
    {
      if(this.newAccount.accountTypeId != 0)
      {
        if(this.newAccount.balance >=0){

        }

      }
    }
    else
    {

    }
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