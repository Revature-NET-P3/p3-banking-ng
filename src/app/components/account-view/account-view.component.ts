import { Component, OnInit, Input, ComponentFactoryResolver, Type, ViewChild } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AccountsService } from 'src/app/services/accounts.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { Account, AccountType } from 'src/app/models/account';
import { CheckingAccountComponent } from '../checking-account/checking-account.component';
import { LoanAccountComponent } from '../loan-account/loan-account.component';
import { TdcAccountComponent } from '../tdc-account/tdc-account.component';
import { AccountViewChild } from 'src/app/models/account-view-child';
import { ViewContainerDirective } from 'src/app/directives/view-container.directive';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
  providers: [
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    AccountsService, ApiService
  ]

})
export class AccountViewComponent implements OnInit {

  currentAccount: Account = null;
  filterOptions = AccountType.AllNames();
  accounts$: Observable<Account[]> = this.accountsSvc.filteredAccounts$();  //= this.accountsSvc.getAccounts(AccountType.Checking); //TODO Get the right type
  childName = 'Account Details';
  @ViewChild(ViewContainerDirective, { static: true }) childHost: ViewContainerDirective;
  get AccountType() {return AccountType}

  constructor(private accountsSvc: AccountsService,
    private componentFactoryResolver: ComponentFactoryResolver, 
    private route: ActivatedRoute,   
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(first()).subscribe(params => {
      var type = +params.get('type') as AccountType;
      console.log('type: ' + AccountType[type]);
      this.accountsSvc.filterByType(type);
    });
  }

  getAccount(account: Account) {
    this.currentAccount = account;
    var childComponent: Type<any> = null;
    switch(account.accountTypeId){
      case AccountType.Checking:
        childComponent = CheckingAccountComponent;
        break;
      case AccountType.Business:
        childComponent = CheckingAccountComponent;
        break;
      case AccountType.Loan:
        childComponent = LoanAccountComponent;
        break;
      case AccountType.Term:
        childComponent = TdcAccountComponent;
        break;
    }
    this.loadChild(childComponent);
  }

  openChange(account: Account){
    if(account == this.currentAccount)
      this.currentAccount = null;
  }

  filter(option: string){
    var type = AccountType[option];
    this.currentAccount = null;
    this.accountsSvc.filterByType(type);
    this.clearChild();
  }

  closeAccount(a: Account){
    if (a.balance==0){
      this.api.closeAccount(a.id).pipe(first()).subscribe(resp => {
        a.isClosed = resp;
      })
    } else {
      alert("This account has a non-zero balance. It can not be closed.")
    }
  }

  clearChild(){
    const viewContainerRef = this.childHost.viewContainerRef;
    viewContainerRef.clear();
  }

  loadChild(child) {
    // To understand this, check out https://angular.io/guide/dynamic-component-loader
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(child);
    const viewContainerRef = this.childHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    var childComp = <AccountViewChild>componentRef.instance;
    childComp.account = this.currentAccount;
    this.api.getAccountsByUser(this.currentAccount.userId).subscribe(ret => {let temp = ret.filter(items=>(items.accountTypeId == 1 || items.accountTypeId==2));
                                                                             //console.log(ret.findIndex(I=>I.id== this.currentAccount.id)); 
                                                                             //console.log(ret);
                                                                             //console.log(temp); 
                                                                             //console.log(temp.splice(temp.findIndex(I=>I.id== this.currentAccount.id),1));
                                                                             //console.log(temp);
                                                                             let aIndex =temp.findIndex(I=>I.id== this.currentAccount.id); 
                                                                             if(aIndex > -1) {temp.splice(aIndex,1);};
                                                                             childComp.accounts$=of(temp);
                                                                            });

  }
}
