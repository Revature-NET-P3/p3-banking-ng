import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/models/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewChecking(){
    this.router.navigate(['/accountList',{type:AccountType.Checking}]);
  }

  viewBusiness() {
    this.router.navigate(['/accountList', { type: AccountType.Business }]);
  }

  viewLoan() {
    this.router.navigate(['/accountList', { type: AccountType.Loan }]);
  }
  viewTerm() {
    this.router.navigate(['/accountList', { type: AccountType.Term }]);
  }

}
