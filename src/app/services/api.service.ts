import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Account, AccountType } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';
import { first } from 'rxjs/operators';

namespace Options {
  export const response: { observe: "response" } = { observe: "response"}
  // TODO: I don't think these are needed
  export const jsonHeader = new HttpHeaders().set('Content-Type', 'application/json');
  export const useJson = { headers: jsonHeader }
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  // Unused?
  login(userCredentials){
    var respObs = this.http.post<string>(this.url, userCredentials, Options.useJson );
    return respObs;
  }

  private doGet<T>(url: string): Observable<T>{
    var response$ = this.http.get<T>(url, Options.response);
    return new Observable<T>(s =>{
      response$.pipe(first()).subscribe(resp => {
        //console.log('body: ' + resp.body);
        s.next(resp.body);
      });
    });
  }

  private doPost<T>(url: string, object:T){
    var response$ = this.http.post(url, object);
    return new Observable(s => {
      response$.pipe(first()).subscribe(resp =>{
        s.next(resp);
      });
    });
  }

  // Accounts Controller API calls
  getAccountsByUser(userId: number): Observable<Account[]> {
    return this.doGet<Account[]>(this.url + '/api/Accounts/' + userId);
  }

  getAccountsByUserAndType(userId: number, typeId: number): Observable<Account[]> {
    return this.doGet<Account[]>(this.url + '/api/Accounts/' + userId.toString() + '/' + typeId.toString());
  }
  
  getAccountDetails(accountId: number): Observable<Account> {
    return this.doGet<Account>(this.url + '/api/Accounts/details/' + accountId);
  }

  getTransactionsByAccount(accountId: number): Observable<Transaction[]> {
    return this.doGet<Transaction[]>(this.url + '/api/Accounts/transactions/' + accountId.toString());
  }

  // AccountTypesApiController
  getAccountTypes(): Observable<AccountType[]> {
    return this.doGet<AccountType[]>(this.url + '/api/AccountTypesApiController');
  }

  getAccountTypeById(typeId: number): Observable<AccountType> {
    return this.doGet<AccountType>(this.url + '/api/AccountTypesApiController/' + typeId);
  }

  getAccountTypeByName(typeName: string): Observable<AccountType> {
    return this.doGet<AccountType>(this.url + '/api/AccountTypesApiController/byName/' + typeName);
  }

}
