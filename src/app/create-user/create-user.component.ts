import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
    phone:new FormControl('',[Validators.required,Validators.min(10000000),Validators.max(99999999999)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address:new FormGroup({
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
  }),
type:new FormControl(),
busfee:new FormControl(),
hostelfee:new FormControl(),
cards:new FormArray([])

});
get cardFormArray(){
  return this.userForm.get('cards') as FormArray;
}

addcard(){
  this.cardFormArray.push(
    new FormGroup(
      {
        number:new FormControl('',[Validators.required]),
        expiry:new FormControl('',[Validators.required]),
        cvv:new FormControl('',[Validators.required]),
      }
    )
  )
}

delete(i:number){
  this.cardFormArray.removeAt(i);
}

constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayscholor'){
        this.userForm.addControl('busfee',new FormControl());
        this.userForm.removeControl('hostelfee');
      
      }
      else if(data='residential'){
        this.userForm.addControl('hostelfee',new FormControl());
        this.userForm.removeControl('busfee');
      }
    }  )
}
  submit(){
    console.log(this.userForm);
  }
}
