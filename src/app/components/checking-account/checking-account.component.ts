import { Component, OnInit, Input } from '@angular/core';
import {BanktransactService } from 'src/app/banktransact.service'
import { Account } from '../account';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css']
})
export class CheckingAccountComponent implements OnInit {
  @Input() account: Account;

  constructor(private bts:BanktransactService) { }

  ngOnInit() {
  }

  Deposit(id, token, account,amount,deposit){
    this.bts.putDeposit(id, token, account,amount,deposit)
  }
  Withdraw(id, token, account,amount,deposit){
    this.bts.getWithdraw(id, token, account,amount,deposit)
  }
  Transfer(id, token, account,amount,deposit){
    this.bts.transfer(id, token, account,amount,deposit)
  }
  Loan(id, token, account){
    this.bts.getloan(id, token, account)
  }

  
}
