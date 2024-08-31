import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdCardService {

  constructor(private _httpclient:HttpClient) { }

  getstudentidcards():Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  getfilteredstudentidcards(term:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }
  getsortedstudentidcards(column:string, order:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  getlimitstudentidcards(count:string,page:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+count+"&page="+page);
  
  }

}
