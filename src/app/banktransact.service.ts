import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanktransactService {
  url = environment.apiUrl;


  constructor(private client: HttpClient) { }


  putDeposit(id,amount){
     return this.client.get(this.url, { headers: new HttpHeaders({'Accept': 'application/json','Content-Type':  'application/json'  })})
  }

  getWithdraw(id,amount){

    return this.client.get(this.url)

  }

  transfer(id,amount){
        
    return this.client.post("request from API team transaction controller", [id, amount])
  }

  getloan(id,amount){
    
    return this.client.get("request from API team transaction controller")
  }
}
