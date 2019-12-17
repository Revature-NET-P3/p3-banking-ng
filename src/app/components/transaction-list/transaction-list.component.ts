import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction, DBTransaction, TransactionType } from 'src/app/models/transaction';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { retry, map, first } from 'rxjs/operators';
import { AccountsService } from 'src/app/services/accounts.service';
import { TransferState } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit, OnDestroy {

  columnsToDisplay = ['type', 'amount', 'date', 'associatedAccount'];
  transactions$: Observable<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  subscriptions: Subscription[] = [];
  accountId: number = 0;

  constructor(private api: ApiService, 
    private userSvc: UserService, 
    private accSvc: AccountsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // TODO add/use filter from parameters
    this.route.paramMap.pipe(first()).subscribe(params => {
      this.accountId = +params.get('account')
      if(this.accountId == 0){
        // Redirect when no account is given
        this.router.navigateByUrl('/accounts')
      }
      if (this.userSvc.isLoggedIn()) {
        this.transactions$ = this.api.getTransactionsByAccount(this.accountId).pipe(
          retry(3),
          map((dbTransactions: DBTransaction[]) => {
            var transactions: Transaction[] = dbTransactions.map(d => {
              return this.accSvc.convertTransaction(d);
            });
            return transactions;
          })
        );
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
