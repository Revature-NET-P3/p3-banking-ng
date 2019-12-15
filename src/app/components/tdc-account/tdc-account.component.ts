import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../models/account';
import { AccountViewChildComponent } from 'src/app/models/account-view-child.component';

@Component({
  selector: 'app-tdc-account',
  templateUrl: './tdc-account.component.html',
  styleUrls: ['../checking-account/checking-account.component.css']
})
export class TdcAccountComponent implements OnInit, AccountViewChildComponent {
  @Input() account: Account;
  constructor() { }

  ngOnInit() {
  }

}
