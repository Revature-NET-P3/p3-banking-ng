import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account, AccountType } from '../../models/account';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css'],
  
  providers: [AccountsService]
  
})
export class CreateNewAccountComponent implements OnInit {

  constructor() { 
    //currentAccount: Account = null;
  }

  ngOnInit() {
  }

}
/*
accountToRecreate (account: Account){

}
*/
//TODO assign values to userId using current user
//accountId
//createDate
//isClosed = true
//accountTypeId