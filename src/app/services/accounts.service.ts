import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { Account, MOCK_ACCOUNTS, AccountType } from '../models/account';
import { UserService } from './user.service';
import { Observable, BehaviorSubject, Subscribable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators'

@Injectable()
export class AccountsService implements OnDestroy {

  accountsSubject: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  loggedInSub: Subscription;
  currentFilter: AccountType = null;

  constructor(
    private api: ApiService,
    private userSvc: UserService,
  ) { this.init() }

  init(){
    this.loggedInSub = this.userSvc.isLoggedIn$().subscribe(inout => {
      if (!inout) {
        this.accountsSubject.next([]);
      } else {
        this.api.getAccountsByUser(this.userSvc.getUser().id).pipe(first()).subscribe(accounts => {
          this.accountsSubject.next(
            accounts.filter(a => this.currentFilter == null || a.accountTypeId == this.currentFilter
          ));
        })
      }
    });
  }

  ngOnDestroy(): void {
    if(this.loggedInSub) this.loggedInSub.unsubscribe();
  }

  accounts$() : Observable<Account[]> {
    return this.accountsSubject.asObservable();
  }

  filterByType(type: AccountType) {
    //var accounts: Account[] = MOCK_ACCOUNTS;
    this.currentFilter = type;
    this.accountsSubject.next([]);
    var userId = this.userSvc.getUser().id;
    this.api.getAccountsByUser(userId).pipe(first()).subscribe(accounts => {
      this.accountsSubject.next(accounts.filter(a => a.accountTypeId == type));
    })
  }

}
