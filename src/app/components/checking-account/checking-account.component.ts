import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../models/account';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css']
})
export class CheckingAccountComponent implements OnInit {
  @Input() account: Account;

  constructor() { }

  ngOnInit() {
  }

}
