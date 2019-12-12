import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class AccountsService {

  constructor(private api: ApiService) { }

  //TODO: Type to models
  //TODO: Use ApiService 
  getCheckingAccounts(){
    return [{name:'nice', balance:5}, {name:'cool', balance:56.78}];
  }

  getBusinessAccounts(){
    return [{ name: 'nice', balance: 6 }, { name: 'cool', balance: 56.78 }];
  }

  getLoanAccounts(){
    return [{ name: 'nice', balance: 7 }, { name: 'cool', balance: 56.78 }];
  }

  getTermAccounts(){ //(Same as CD)
    return [{ name: 'nice', balance: 8 }, { name: 'cool', balance: 56.78 }];
  }

}
