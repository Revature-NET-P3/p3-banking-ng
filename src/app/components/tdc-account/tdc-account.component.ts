import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../models/account';
import { AccountViewChild } from 'src/app/models/account-view-child';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tdc-account',
  templateUrl: './tdc-account.component.html',
  styleUrls: ['../checking-account/checking-account.component.css']
})
export class TdcAccountComponent implements OnInit, AccountViewChild {
  @Input() account: Account;
  @Input() accounts$: Observable<Account[]>;
  
  constructor() { }

  ngOnInit() {
  }

}
