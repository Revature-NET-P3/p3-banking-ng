import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from 'src/app/services/api.service'

import { Account } from '../../models/account';
import { AccountViewChild } from 'src/app/models/account-view-child';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['../checking-account/checking-account.component.css'],
  providers:[
    ApiService
  ]
})
export class LoanAccountComponent implements OnInit, AccountViewChild {
  @Input() account: Account;
  @Input() accounts$: Observable<Account[]>;
  pay_message : string = "Enter payment amount";
  pay_amount : number;
  
  constructor(private apisvc: ApiService) { }

  ngOnInit() {
  }

  OnPaySubmit(){
    if(this.pay_amount > 0){
      this.apisvc.processLoanPayment(this.account.id, this.pay_amount).subscribe(item =>
        location.reload()
        )
    }
    else{this.pay_message = 'Please enter a positive number value.'}
  }

}
