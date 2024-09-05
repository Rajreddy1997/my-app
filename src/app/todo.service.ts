import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private text:string="";
  private time:string="";

  private textsubject:BehaviorSubject<string>=new BehaviorSubject(this.text);
  private timesubject:BehaviorSubject<string>=new BehaviorSubject(this.time);

  constructor(){}
  setText(textvalue:any){
    this.textsubject.next(textvalue);
  }

  getText(){
    return this.textsubject;
}
setTime(datevalue:any){
   this.timesubject.next(datevalue);
}
getTime(){
  return this.timesubject;
}
}


