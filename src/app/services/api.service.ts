import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { Account, AccountType } from 'src/app/models/account';
import { UserModel } from 'src/app/models/user-model';
import { Transaction } from 'src/app/models/transaction';
import { first } from 'rxjs/operators';
import {LoginCredentials} from 'src/app/models/LoginCredentials'
import { AuthService } from './auth.service';

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


  login(username: string, passhash: string) {

    //let token = "";
    console.log('url', this.url);
    let cred: LoginCredentials = new LoginCredentials();
    cred.userName=username;
    //let pwd = '$2y$10$8XcQw//Q1Lik3Mg6Nx2hdeODJWd808AOAmUqwbbvshp/r4se4KspC';
    //let pwd =this.auth.HashPassword(password);
    
    cred.passhash = passhash;

    //console.log('password', cred.passhash);
    let response = this.http.post<boolean>(this.url + "/api/UserAPI/Verify", cred);

    console.log('response', response);
    return response;
    // response.toPromise().then(data => console.log('promise:data', data));
    // response.subscribe(data => {
    //   console.log('data', data);
    // })
    //response.pipe(first()).subscribe(resp => {
      // response.toPromise().then(resp => {
      //   return resp;
      // if (resp){
        // console.log('promise resp', resp);
        // token = this.auth.getToken(username, password);
        // console.log('api token', token);
        // return token;
      // }else {
        // console.log('resp = false');
      // }
    //})

  }

  getUserByUserName(username: string):Observable<UserModel>{
    let response = this.http.get<UserModel>(this.url + '/api/UserAPI/username/' + username);
    return response;
  }
  //User Controller API calls
  // createUser(username: string, email: string, password: string)
  // {
  //   var user = new UserModel();
  //   user.email = email;
  //   user.userName = username;
    
  //   user.password = password;
  //   this.auth.HashPassword(user.password);
  //   this.doPost<UserModel>(this.url + '/api/UsersAPI/CreateUser', user);
  // }

  createUser(newUser: UserModel): boolean
  {
    var user = new UserModel();
    
    // user.email = newUser.email;
    // user.userName = newUser.userName;  
    // user.password = newUser.password;
    this.auth.HashPassword(newUser.password);
    var response: Observable<boolean> = this.http.post<boolean>(this.url + '/api/UsersAPI/CreateUser', user);
    response.pipe(first()).subscribe(resp => {
      if (resp){
        this.registerSuccessful = true;
        return this.registerSuccessful;
      }
      else{
        this.registerSuccessful = false;
        return this.registerSuccessful;
      }     
  })
  return false;
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
