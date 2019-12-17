import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account, AccountType } from '../../models/account';
import { ApiService } from 'src/app/services/api.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';


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

  private locale = "en-US";
  newAccount: Account = null;
  openCreate: boolean = false;
  filterOptions = AccountType.AllNames();
  url = environment.apiUrl;
  creatingAccount: boolean = true;
  postedAccount: Account;
  selectedAccountType:string = "Select an Account Type";

  //accountType:AccountType;
  constructor(private apiSvc: ApiService) { 
    this.url += "/api/Transferables"
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
    // |date:'fullDate'
    
    //var currentTime = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US', '+0500') + 'T' + formatDate(Date.now(), 'hh:mm:ss', 'en-US', '+0500') + '.00'
    //currentTime : string = new Date().toISOString();
    //var currentTime = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US', '+0500');
    var currentTime = new Date();
    this.newAccount = new Account({
        id: 1,
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
        this.postRecord(this.newAccount);
        //this.apiSvc.
      }
    }
    //this.apiSvc
    
  }

  postRecord(account: Account){
    this.apiSvc.openAccount(account).subscribe(postResponse=> 
      {this.creatingAccount=false; /*this.postedAccount = postResponse as Account;*/ console.log(postResponse)});
  }


  //looks for string value
  formatDate(date: string) : string {
    return formatDate(date, 'medium', this.locale);
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