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

  createAccount(type:string){
  /*  //newAcc = this.newAccount;*/
    var nickname:string = 'Checking Name';
    this.newAccount = new Account({
        id: null,
        userId: 1,
        accountTypeId: AccountType[type],
        balance: 0,
        createDate: new Date(),
        isClosed: false
    });
    console.log(AccountType[type]);
    //this.newAccount = {1,1,1,1,new Date(), false, "Checking nick"};
    
    if(this.newAccount.userId !=null)
    {
      if(this.newAccount.accountTypeId != 0)
      {
        console.log(this.newAccount);    
        //this.apiSvc.
      }
    }
    else
    {

    }
    //this.apiSvc
    
  }

  postRecord{
    
  }

}


/*
accountToRecreate (account: Account){

}

{ id: 1,
  userId: 1,
  accountTypeId: 1,
  balance: 12,
  createDate = new Date(),
  isClosed = false}
*/
//TODO assign values to userId using current user
//POST to DB