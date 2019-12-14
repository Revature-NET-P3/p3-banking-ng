import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../models/account';
import { AccountViewChildComponent } from 'src/app/models/account-view-child.component';

@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['../regular-account/regular-account.component.css']
})
export class LoanAccountComponent implements OnInit, AccountViewChildComponent {
  @Input() account: Account;
  
  constructor() { }

  ngOnInit() {
  }

}