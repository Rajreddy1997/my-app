import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts:any = [];
  public term:string="";

  public column:string="";
  public order:string="";

  public count:any="";
  public page:any =""; 
  constructor(private _accountservice:AccountService,private _router:Router){
    _accountservice.getaccount().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
     (err:any)=>{
      alert("internal server error");
     } 
    )
  }

  filter(){
    this._accountservice.getFilteraccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  sort(){
    this._accountservice.getSortedaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  limit(){
    this._accountservice.getlimitaccounts(this.count,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )  
  }
  view(id:string){
    this._router.navigateByUrl("/dashboard/view-account/"+id);
  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-account/"+id);
  }
  }


