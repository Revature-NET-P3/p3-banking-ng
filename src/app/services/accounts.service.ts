import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Account, MOCK_ACCOUNTS } from '../models/account';

@Injectable()
export class AccountsService {

  constructor(private api: ApiService) { }

  //TODO: Type to models
  //TODO: Use ApiService 
  getAccounts<T extends Account>() {
    //var accounts = this.api.getAccounts();
    var accounts: Account[] = MOCK_ACCOUNTS;
    return accounts.filter((a:Account): a is T => (a as T) !== undefined);
  }

}
