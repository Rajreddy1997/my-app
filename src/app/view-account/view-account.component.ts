import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {

  public account: any ={};

  constructor(private _activatedRouter:ActivatedRoute, private _accountService:AccountService){
    _activatedRouter.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _accountService.getaccounts(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )
              
          }
        )
      }
      }
    
  


