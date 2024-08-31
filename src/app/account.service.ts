import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient:HttpClient) { }
    getaccount():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
    }
    getaccounts(id:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
    }
    getFilteraccounts(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+  term);
   }
    getSortedaccounts(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
   }
    getlimitaccounts(count:number,page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+count+"&page="+page);
    }
    createaccounts(data:any):Observable<any>{
     return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data); 
    }
    updateaccount(data:any,id:string):Observable<any>{
      return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data);
    }
   }

