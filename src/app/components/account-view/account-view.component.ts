import { Component, OnInit, Input, ComponentFactoryResolver, Type, ViewChild } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AccountsService } from 'src/app/services/accounts.service';


import { Account, AccountType } from '../../models/account';
import { RegularAccountComponent } from '../regular-account/regular-account.component';
import { AccountViewChildComponent } from 'src/app/models/account-view-child.component';
import { ViewContainerDirective } from 'src/app/directives/view-container.directive';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
  providers: [
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    AccountsService
  ]

})
export class AccountViewComponent implements OnInit {

  oneAtATime: boolean = true;
  currentAccount: Account = null;
  filterOptions = ["Checking", "Business", "Loan", "Term"]
  accounts: Account[];  //= this.accountsSvc.getAccounts(AccountType.Checking); //TODO Get the right type
  master = 'Account Details';
  @ViewChild(ViewContainerDirective, { static: true }) childHost: ViewContainerDirective;

  constructor(private accountsSvc: AccountsService,
    private componentFactoryResolver: ComponentFactoryResolver, 
    private route: ActivatedRoute,   
  ) { }

  ngOnInit() {
    var sub = this.route.paramMap.subscribe(params => {
      var type = +params.get('type') as AccountType;
      console.log('type: ' + type);
      this.accounts = this.accountsSvc.getAccounts(type);
      sub.unsubscribe();
    });
  }

  getAccount(account: Account) {
    this.currentAccount = account;
    var childComponent: Type<any> = null;
    switch(account.type){
      case AccountType.Checking:
        childComponent = RegularAccountComponent;
        break;
      case AccountType.Business:
        childComponent = RegularAccountComponent; //TODO
        break;
      case AccountType.Loan:
        childComponent = RegularAccountComponent; //TODO
        break;
      case AccountType.Term:
        childComponent = RegularAccountComponent; //TODO
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
    this.accounts = this.accountsSvc.getAccounts(type);
    this.clearChild();
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
    (<AccountViewChildComponent>componentRef.instance).account = this.currentAccount;
  }

}
