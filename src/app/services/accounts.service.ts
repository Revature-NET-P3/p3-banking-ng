import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Account, MOCK_ACCOUNTS, AccountType } from '../models/account';
import { UserService } from './user.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators'

@Injectable()
export class AccountsService implements OnInit {

  accountsSubject: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);

  constructor(
    private api: ApiService,
    private userSvc: UserService
  ) { }

  ngOnInit(): void {
    // Probably remove
    this.api.getAccountsByUser(this.userSvc.getUser().id).pipe(first()).subscribe(accounts => {
      this.accountsSubject.next(accounts);
    })
  }

  accounts$() : Observable<Account[]> {
    return this.accountsSubject.asObservable();
  }

  //TODO: Type to models
  //TODO: Use ApiService 
  filterByType(t:AccountType) {
    //TODO Ensure logged in
    //var accounts: Account[] = MOCK_ACCOUNTS;
    this.accountsSubject.next([]);
    var userId = 60;//this.userSvc.getUser().id;
    this.api.getAccountsByUser(userId).pipe(first()).subscribe(accounts => {
      this.accountsSubject.next(accounts.filter(a => a.accountTypeId == t));
    })
  }

}
