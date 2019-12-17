import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber, from } from 'rxjs';
import { Account, AccountType } from 'src/app/models/account';
import { UserModel } from 'src/app/models/user-model';
import { Transaction } from 'src/app/models/transaction';
import { DBTransaction } from 'src/app/models/transaction';

import { first } from 'rxjs/operators';
import {LoginCredentials} from 'src/app/models/LoginCredentials'
import { AuthService } from './auth.service';

namespace Options {
  export const response: { observe: "response" } = { observe: "response"}
  //export const events = {observe: 'events'} //TODO: use this (https://angular.io/guide/http#listening-to-progress-events)
  // TODO: I don't think these are needed
  export const jsonHeader = new HttpHeaders().set('Content-Type', 'application/json');
  export const useJson = { headers: jsonHeader }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  registerSuccessful: boolean;
  url = environment.apiUrl;
  constructor(private http: HttpClient, private auth: AuthService) { }

  private successStatus<T>(r: HttpResponse<T>): boolean{
    return r.status.toString().charAt(0) == '2';
  }

  private evaluateResponse<T>(r: HttpResponse<T>){
    if (this.successStatus(r)){
      console.log(`API call succeeded with ${r.status}`);
    } else {
      console.log(`API call failed with ${r.status}. Body: '${r.body}'`);
    }
  } 

  private obsFirst<T>(response$: Observable<HttpResponse<T>>){
    return new Observable<T>(s => {
      response$.pipe(first()).subscribe(resp => {
        this.evaluateResponse(resp);
        s.next(resp.body);
      });
    });
  }

  private doGet<T>(url: string): Observable<T> {
    var response$ = this.http.get<T>(url, Options.response);
    return this.obsFirst(response$);
  }

  private doPost<T>(url: string, object: T): Observable<any> {
    var response$ = this.http.post(url, object, Options.response);
    return this.obsFirst(response$);
  }

  private doPut<T>(url: string, object: T): Observable<any> {
    var response$ = this.http.put(url, object, Options.response);
    return this.obsFirst(response$);
  }

  private doDelete(url: string) {
    var response$ = this.http.delete(url, Options.response);
    return new Observable<boolean>(s => {
      response$.pipe(first()).subscribe(resp => {
        this.evaluateResponse(resp);
        s.next(this.successStatus(resp));
      });
    });
  }


  login(username: string, passhash: string) {

    //let token = "";
    console.log('url', this.url);
    let cred: LoginCredentials = new LoginCredentials();
    cred.userName=username;
    cred.passhash = passhash;
    
    let response = this.http.post<boolean>(this.url + "/api/UserAPI/Verify", cred);
    console.log('response', response);

    return response;
  }

  getUserByUserName(username: string):Observable<UserModel>{
    return this.doGet<UserModel>(this.url + '/api/UserAPI/username/' + username);
  }

  createUser(newUser: UserModel): Observable<boolean>
  {
    var newPassword = this.auth.HashPassword(newUser.passwordHash);
    newUser.passwordHash = newPassword;
    var response: Observable<boolean> = this.http.post<boolean>(this.url + '/api/UserAPI/register', newUser);
    return response;
}

  
  // Accounts Controller API calls
  // AccountsController
  getAccountsByUser(userId: number): Observable<Account[]> {
    return this.doGet<Account[]>(this.url + '/api/Accounts/' + userId);
  }

  getAccountsByUserAndType(userId: number, typeId: number): Observable<Account[]> {
    return this.doGet<Account[]>(this.url + '/api/Accounts/' + userId.toString() + '/' + typeId.toString());
  }
  
  getAccountDetails(accountId: number): Observable<Account> {
    return this.doGet<Account>(this.url + '/api/Accounts/details/' + accountId);
  }

  getTransactionsByAccount(accountId: number): Observable<DBTransaction[]> {
    return this.doGet<DBTransaction[]>(this.url + '/api/Accounts/transactions/' + accountId.toString());
  }

  getTransactionsByAccountWithDateRange(accountId: number, startDate: string, endDate: string): Observable<DBTransaction[]> {
    return this.doGet<DBTransaction[]>(this.url + '/api/Accounts/transactions/' + accountId.toString() + '/' + startDate + '/' + endDate);
  }

  getTransactionsByAccountWithLimit(accountId: number, limit: number): Observable<DBTransaction[]> {
    return this.doGet<DBTransaction[]>(this.url + '/api/Accounts/transactions/' + accountId.toString() + '/' + limit.toString());
  }

  getTransactionsByAccountWithDateRangeAndLimit(accountId: number, startDate: string, endDate: string, limit: number): Observable<DBTransaction[]> {
    return this.doGet<DBTransaction[]>(this.url + '/api/Accounts/transactions/' + accountId.toString() + '/' + limit.toString() + '/' + startDate + '/' + endDate);
  }

  // AccountTypesApiController
  getAccountTypes(): Observable<AccountType[]> {
    return this.doGet<AccountType[]>(this.url + '/api/AccountTypesApi');
  }

  getAccountTypeById(typeId: number): Observable<AccountType> {
    return this.doGet<AccountType>(this.url + '/api/AccountTypesApi/' + typeId);
  }

  getAccountTypeByName(typeName: string): Observable<AccountType> {
    return this.doGet<AccountType>(this.url + '/api/AccountTypesApi/byName/' + typeName);
  }

  // LoanAccountController
  openLoan(account: Account): Observable<any> {
    return this.doPost<Account>(this.url + '/api/LoanAccount/open/',account);
  }

  processLoanPayment(accId: number, amount: number): Observable<any> {
    return this.doPut(this.url + '/api/LoanAccount/payLoan/' + accId.toString() + '/' + amount.toString(), null);
  }

  closeLoan(accId: number): Observable<any> {
    return this.doDelete(this.url + '/api/LoanAccount/close/' + accId.toString());
  }

  // TermCDController
  withdrawCD(accId: number, amount: number): Observable<any> {
    return this.doPut(this.url + '/api/TermCD/withdraw/' + accId.toString() + '/' + amount.toString(), null);
  }

  transferCD(fromAcc: number, toAcc: number, amount: number): Observable<any> {
    return this.doPut(this.url + '/api/TermCD/transfer/' + fromAcc.toString() + '/' + toAcc.toString() + '/' + amount.toString(), null);
  }

  openCD(account: Account): Observable<any> {
    return this.doPost<Account>(this.url + '/api/TermCD/open', account);
  }

  // TransferablesController
  openAccount(account: Account): Observable<Account> {
    return this.doPost(this.url + '/api/Transferables', account);
  }

  deposit(accId: number, amount: number): Observable<any> {
    return this.doPut(this.url + '/api/Transferables/deposit/' + accId.toString() + '/' + amount.toString(), null);
  }

  withdraw(accId: number, amount: number): Observable<any> {
    return this.doPut(this.url + '/api/Transferables/withdraw/' + accId.toString() + '/' + amount.toString(), null);
  }

  transfer(fromAcc: number, toAcc: number, amount: number): Observable<any> {
    return this.doPut(this.url + '/api/Transferables/transfer/' + fromAcc.toString() + '/' + toAcc.toString() + '/' + amount.toString(), null);
  }

  delete(accId: number): Observable<any> {
    return this.doDelete(this.url + '/api/Transferables/delete/' + accId.toString());
  }
}