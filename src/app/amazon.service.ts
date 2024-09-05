import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {
    private count:number=0;
    private countSubject:BehaviorSubject<number>=new BehaviorSubject(this.count);

  constructor() { }
 addtocart(){
  this.count++;
  this.countSubject.next(this.count);
 }
getcount(){
  return this.countSubject;
}
  }
  
