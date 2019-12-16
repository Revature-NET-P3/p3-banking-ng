import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { Account, AccountType } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';
import { first } from 'rxjs/operators';
import {LoginCredentials} from 'src/app/models/LoginCredentials'
import { AuthService } from './auth.service';
import { UserModel } from '../models/user-model';

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

  private doGet<T>(url: string): Observable<T> {
    var response$ = this.http.get<T>(url, Options.response);
    return new Observable<T>(s =>{
      response$.pipe(first()).subscribe(resp => {
        this.evaluateResponse(resp); 
        s.next(resp.body);
      });
    });
  }

  private doPost<T>(url: string, object: T): Observable<any>{
    var response$ = this.http.post(url, object, Options.response);
    return new Observable(s => {
      response$.pipe(first()).subscribe(resp =>{
        this.evaluateResponse(resp);
        s.next(resp.body);
      });
    });
  }

  private doPut<T>(url: string, object: T): Observable<any> {
    var response$ = this.http.put(url, object, Options.response);
    return new Observable(s => {
      response$.pipe(first()).subscribe(resp => {
        this.evaluateResponse(resp);
        s.next(resp.body);
      });
    });
  }

  private doDelete<T>(url: string) {
    var response$ = this.http.delete(url, Options.response);
    return new Observable<boolean>(s => {
      response$.pipe(first()).subscribe(resp => {
        this.evaluateResponse(resp);
        s.next(this.successStatus(resp));
      });
    });
  }


  login(username: string, password: string): string {
    var cred: LoginCredentials = new LoginCredentials();
    cred.userName=username;
    cred.password=this.auth.HashPassword(password);
    var response: Observable<boolean> = this.http.post<boolean>(this.url + "api/UserAPI/Verify", cred);
    response.pipe(first()).subscribe(resp => {
      if (resp){
        return this.auth.getToken(username, password);
      }else {
        return null;
      }
    })
    return null;
  }

  getUserByUserName(username: string):Observable<UserModel>{
    return this.doGet<UserModel>(this.url + '/api/UserAPI/' + username);
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
