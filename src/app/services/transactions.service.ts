import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private client: HttpClient) { }


  putDeposit(id,amount){
     return this.client.put("request from API team transaction controller", [id, amount])
  }

  getWithdraw(id,account){

    return this.client.get("request from API team transaction controller")

  }

  transfer(id,amount){
        
    return this.client.post("request from API team transaction controller", [id, amount])
  }

  getloan(id,amount){
    
    return this.client.get("request from API team transaction controller")
  }
}
