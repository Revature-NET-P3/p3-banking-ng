import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account, AccountType } from '../../models/account';
import { ApiService } from 'src/app/services/api.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';
import { UserService } from 'src/app/services/user.service';


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
  filterOptions = AccountType.AllNames();
  url = environment.apiUrl;
  creatingAccount: boolean = true;
  postedAccount: Account;
  selectedAccountType:string = "Select an Account Type";
  nickName: string = null;
  amount: number = 0;
  amount_message: string = null;
  get AccountType() { return AccountType }
  TypeName: string = null;

  

  //accountType:AccountType;
  constructor(
    private apiSvc: ApiService,
    private userSvc: UserService
    ) { 
  }

  ngOnInit() {
  }

  setAccountType(typeAcc: string){
    this.selectedAccountType = typeAcc;
  }

  createAccount(type:string){  
    if(this.amount < 0){this.amount_message = 'Enter a positive number value.'}
    else if(this.TypeName == null){this.amount_message = 'Select an account type.'}
    else {
    var currentTime = formatDate(Date.now(), 'yyyy-MM-ddThh:mm:ss.00', 'en-US', '+0500');
    var newAccount: Account = new Account({
        id: 0,
        userId: this.userSvc.getUser().id,
        accountTypeId: AccountType[type],
        balance: 0,
        createDate: currentTime,
        isClosed: false,
        accNickname: this.nickName
    });    
    newAccount.balance = +this.amount;
    if(newAccount.accountTypeId != 0 && this.TypeName != null)
    {
      this.postRecord(newAccount);
    }     } 
  }
    //this.apiSvc

  postRecord(a: Account){
    this.apiSvc.openAccount(a).subscribe(postResponse => 
    {
      this.creatingAccount = false; 
      this.postedAccount = postResponse;
    });
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