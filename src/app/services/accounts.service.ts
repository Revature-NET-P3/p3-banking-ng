import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { Account, MOCK_ACCOUNTS, AccountType } from '../models/account';
import { UserService } from './user.service';
import { Observable, BehaviorSubject, Subscribable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators'
import { DBTransaction, Transaction } from '../models/transaction';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AccountsService implements OnDestroy {

  allAccountsSubject: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  accountsSubject: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  subscriptions: Subscription[] = [];
  currentFilter: AccountType = null;

  constructor(
    private api: ApiService,
    private userSvc: UserService,
  ) { this.init() }

  init(){
    this.subscriptions.push(this.userSvc.isLoggedIn$().subscribe(inout => {
      if (!inout) {
        this.accountsSubject.next([]);
      } else {
        this.api.getAccountsByUser(this.userSvc.getUser().id).pipe(first()).subscribe(accounts => {
          this.allAccountsSubject.next(accounts);
          this.accountsSubject.next(
            accounts.filter(a => this.currentFilter == null || a.accountTypeId == this.currentFilter
          ));
        })
      }
    }));
    // TODO!
    // this.subscriptions.push(this.transactionSvc.getChanges().subscribe(change => {
    //   this.api.getAccountsByUser(this.userSvc.getUser().id).pipe(first()).subscribe(accounts => {
    //     this.allAccountsSubject.next(accounts);
    //     this.accountsSubject.next(
    //       accounts.filter(a => this.currentFilter == null || a.accountTypeId == this.currentFilter
    //       ));
    //   })
    // }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  filteredAccounts$() : Observable<Account[]> {
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

  private getName(id: number): null|string{
    if(id == 0) return "-";
    console.log('getName id: ' + id);
    var accounts = this.allAccountsSubject.getValue();
    var res = accounts.find(a => a.id == id);
    if(res == undefined) return "-";
    else if(isNullOrUndefined(res.accNickname)) return "(No name)";
    return res.accNickname
  }

  convertTransaction(d: DBTransaction): Transaction{
    var t: Transaction = d as Transaction;
    t.accountName = this.getName(t.accountId);
    t.associatedAccountName = this.getName(t.associatedAccountId);
    return t;
  }

}
