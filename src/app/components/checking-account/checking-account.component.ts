import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService} from 'src/app/services/transactions.service'
import { Account } from '../../models/account';
import { AccountViewChild } from 'src/app/models/account-view-child';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service'
import { takeLast } from 'rxjs/operators';
import { discardPeriodicTasks } from '@angular/core/testing';


@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css'],
  providers: [
    ApiService, TransactionsService
  ]
})
export class CheckingAccountComponent implements OnInit, AccountViewChild{
  @Input() account: Account;
  @Input() accounts$: Observable<Account[]>;
  deposit_amount = 0;
  withdraw_amount = 0;
  transfer_amount = 0;
  deposit_message: string = 'Enter the deposit amount';
  withdraw_message: string = 'Enter amount to withdraw';
  transfer_message: string = 'Enter transfer amount';
  transferAcc: number;
  


  constructor(private bts:TransactionsService, private api:ApiService) { }



  ngOnInit() {
  }
  

  OnSubmitDeposit() {
    
    if (this.deposit_amount > 0){
      this.api.deposit(this.account.id, this.deposit_amount).subscribe( item =>
       location.reload()
      )
    }
    else{
      this.deposit_message = 'Please enter number value greater than 0.'
    }
  }

  OnSubmitWithdraw() { 
    if (this.account.balance < this.withdraw_amount && this.account.accountTypeId == 1){
      this.withdraw_message = 'You cannot overdraft on this account';
    }
    else if (this.withdraw_amount > 0){
      this.api.withdraw(this.account.id, this.withdraw_amount).subscribe(r => 
        location.reload()
      )
    }
    else{
      this.withdraw_message = 'Please enter number value greater than 0.'
    }
  }

  OnSubmitTransfer() {
    if (this.account.balance < this.transfer_amount && this.account.accountTypeId == 1){
      this.transfer_message = 'You cannot overdraft from a checking.';
    }
    else if (this.transfer_amount > 0){
      this.api.transfer(this.account.id, this.transferAcc, this.transfer_amount).subscribe( item =>
        location.reload()
      )

    }
    else{
      this.transfer_message = 'Please enter number value greater than 0.'
    }
  }
}