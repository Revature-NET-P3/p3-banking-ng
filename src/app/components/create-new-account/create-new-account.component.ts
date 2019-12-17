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
  get AccountType() { return AccountType }

  //accountType:AccountType;
  constructor(
    private apiSvc: ApiService,
    private userSvc: UserService
    ) { 
  }

  ngOnInit() {
    // TODO check logged in
  }

  setAccountType(typeAcc: string){
    this.selectedAccountType = typeAcc;
  }

  createAccount(type:string){  
    var currentTime = formatDate(Date.now(), 'yyyy-MM-ddThh:mm:ss.00', 'en-US', '+0500')// + 'T' + formatDate(Date.now(), 'hh:mm:ss', 'en-US', '+0500') + '.00';
    var newAccount: Account = new Account({
        id: 0,
        userId: this.userSvc.getUser().id,
        accountTypeId: AccountType[type],
        balance: 0,
        createDate: currentTime,
        isClosed: false,
        accNickname: this.nickName
    });
    console.log(AccountType[type]);
    //this.newAccount = {1,1,1,1,new Date(), false, "Checking nick"};
    
    if(newAccount.userId !=null)
    
      if(newAccount.accountTypeId != 0)
      {
        if(this.nickName != "" && this.nickName != null){
          console.log(newAccount);
          this.postRecord(newAccount);
        }
        
        //this.apiSvc.
      }
    }
    //this.apiSvc

  postRecord(a: Account){
    this.apiSvc.openAccount(a).subscribe(postResponse => 
    {
      this.creatingAccount=false; 
      this.postedAccount = postResponse as Account;
    });
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