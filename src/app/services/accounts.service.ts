import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Account, MOCK_ACCOUNTS, AccountType } from '../models/account';

@Injectable()
export class AccountsService {

  constructor(private api: ApiService) { }

  //TODO: Type to models
  //TODO: Use ApiService 
  getAccounts(t:AccountType) {
    //var accounts = this.api.getAccounts();
    var accounts: Account[] = MOCK_ACCOUNTS;
    return accounts.filter((a:Account) => a.AccountTypeId == t);
  }

}
