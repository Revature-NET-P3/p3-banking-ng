import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanktransactService {

  constructor(private client: HttpClient) { }


  putDeposit(id, token, account,amount,deposit){
     this.client.put("request from API team transaction controller", [id,token, account, amount,deposit]);
  }

  getWithdraw(id,token, account, amount, withdraw){

    this.client.get("request from API team transaction controller")

  }

  transfer(id, token,amount,account,toaccount){
        
    this.client.post("request from API team transaction controller", [id, token,amount,account,toaccount])
  }

  getloan(id, internalID,amount){
    
    this.client.get("request from API team transaction controller")
  }
}
