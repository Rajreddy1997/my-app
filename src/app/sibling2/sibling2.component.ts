import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  public count:number=0;
  public cartCount:number=0;


  constructor(private _commonService:CommonService){
    _commonService.getCount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )

     _commonService.getCartCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
     )
  }

  
}
