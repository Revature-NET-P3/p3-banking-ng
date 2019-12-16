import { Component, OnInit, Input } from '@angular/core';
import { BanktransactService} from 'src/app/banktransact.service'
import { Account } from '../../models/account';
import { AccountViewChildComponent } from 'src/app/models/account-view-child.component';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css']
})
export class CheckingAccountComponent implements OnInit, AccountViewChildComponent{
  @Input() account: Account;
  amount = 0;
  status : any

  constructor(private bts:BanktransactService) { }

  ngOnInit() {
  }

  Deposit(amount){
    this.bts.putDeposit(this.account.id, amount).subscribe(data => this.status = data[0])
  }
  Withdraw(amount){
     this.bts.getWithdraw(this.account.id, amount).subscribe(data => data[0])
  }
  Transfer(amount){
   this.bts.transfer(this.account.id, amount).subscribe(data => data[0])
  }
  Loan(amount){
    this.bts.getloan(this.account.id, amount).subscribe(data => data[0])
  }

}
