import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Account, AccountType } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  // Unused?
  login(userCredentials){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var respObs = this.http.post<string>(this.url, userCredentials, { headers });
    return respObs;
  }

  // Accounts Controller API calls
  GetAllAccountsByUserId(UserId: number): Observable<Account[]> {
    var response = this.http.get<HttpResponse<Account[]>>(this.url + '/api/Accounts/' + UserId.toString());
    return new Observable<Account[]>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }

  GetAllAccountsByUserIdAndTypeId(UserId: number, TypeId: number): Observable<Account[]> {
    var response = this.http.get<HttpResponse<Account[]>>(this.url + '/api/Accounts/' + UserId.toString() + '/' + TypeId.toString());
    return new Observable<Account[]>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }
  
  GetAccountDetailsByAccountId(AccId: number): Observable<Account> {
    var response = this.http.get<HttpResponse<Account>>(this.url + '/api/Accounts/details/' + AccId.toString());
    return new Observable<Account>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }

  GetTransactionDetailsByAccountId(AccId: number): Observable<Transaction[]> {
    var response = this.http.get<HttpResponse<Transaction[]>>(this.url + '/api/Accounts/transactions/' + AccId.toString());
    return new Observable<Transaction[]>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }

  // AccountTypesApiController
  GetAccountTypes(): Observable<AccountType[]> {
    var response = this.http.get<HttpResponse<AccountType[]>>(this.url + '/api/AccountTypesApiController');
    return new Observable<AccountType[]>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }

  GetAccountTypeById(TypeId: number): Observable<AccountType> {
    var response = this.http.get<HttpResponse<AccountType>>(this.url + '/api/AccountTypesApiController/' + TypeId.toString());
    return new Observable<AccountType>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }

  GetAccountTypeByName(TypeName: string): Observable<AccountType> {
    var response = this.http.get<HttpResponse<AccountType>>(this.url + '/api/AccountTypesApiController/byName/' + TypeName);
    return new Observable<AccountType>(s => {
      response.subscribe(resp => {
        s.next(resp.body)
      })
    });
  }

}
