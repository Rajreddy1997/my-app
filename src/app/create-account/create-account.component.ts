import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  public id:string="";

  public accountForm:FormGroup=new FormGroup(
    {
      account_name: new FormControl(),
      account_number: new FormControl(),
      available_balance: new FormControl(),
      city:new FormControl(),
      profile_picture: new FormControl(),
    }
  )

  constructor(private _accountService:AccountService,private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id; 
        _accountService.getaccounts(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue(data);
          }
        )
      }
    )
  }

  create(){
    console.log(this.accountForm.value);

    if(this.id){
      this._accountService.updateaccount(this.accountForm.value,this.id).subscribe(
        (data:any)=>{
          alert("updated succesfully!!");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("updation failed");
        }
      )
    }
    else{
      this._accountService.createaccounts(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("created succesfully");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("creation failed");
        }
      )
    }

  this._accountService.createaccounts(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("account created successfully!!!");
    },
    (err:any)=>{
      alert("account creataion failed");
    }
  )
  }

}
