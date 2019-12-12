import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { ACCOUNT } from '../account';

@Component({
  selector: 'app-accountview',
  templateUrl: './accountview.component.html',
  styleUrls: ['./accountview.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]

})
export class AccountviewComponent implements OnInit {

  account = ACCOUNT;
  master = 'Account - Details';

  constructor() { }

  ngOnInit() {
  }

  getAccount(Id: number) {
    //logic here
    
  }
}
