import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../models/account';
import { AccountViewChildComponent } from 'src/app/models/account-view-child.component';

@Component({
  selector: 'app-regular-account',
  templateUrl: './regular-account.component.html',
  styleUrls: ['./regular-account.component.css']
})
export class RegularAccountComponent implements OnInit, AccountViewChildComponent{
  @Input() account: Account;

  constructor() { }

  ngOnInit() {
  }
}
