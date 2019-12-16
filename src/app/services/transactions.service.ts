import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Transactions} from './transactions'

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  

  constructor(private client: HttpClient) { }


  putDeposit(Transaction){
     return this.client.put<Transactions>("http://localhost:37642/api/Transferables/Deposit/", JSON.stringify(Transaction), { headers: new HttpHeaders({'Accept': 'application/json','Content-Type':  'application/json' })} )
  }

  getWithdraw(id,amount){

    return this.client.get("tion cont")

  }

  transfer(id,amount){
        
    return this.client.post("request from API team transaction controller", [id, amount])
  }

  getloan(id,amount){
    
    return this.client.get("request from API team transaction controller")
  }
}
