import { makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {

  public studentForm:FormGroup = new FormGroup({
   name:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
   class:new FormControl('',[Validators.required,Validators.min(2),Validators.max(5)]),
   fathername:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
   email:new FormControl('',[Validators.required,Validators.email]),
   dob:new FormControl('',[Validators.required]),
   address:new FormGroup({
    addressLine:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
   }),
   type:new FormControl(),
    // dayscholor:new FormControl(),
    // residential:new FormControl(), 
   
    marks:new FormArray([])

  })

  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
    }

    addmarks(){
      this.marksFormArray.push(
        new FormGroup({
          class:new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
          year:new FormControl('',[Validators.required,Validators.min(1997),Validators.max(2024)]),
          percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
        
        })
      )
    }
  
  constructor(){
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholor'){
          this.studentForm.addControl('busfee',new FormControl());
          this.studentForm.removeControl('hostlefee');
        }
        else if(data=='residential'){
          this.studentForm.addControl('hostelfee',new FormControl());
          this.studentForm.removeControl('busfee');
        }
      }    
    )
  }
  submit(){
    console.log(this.studentForm);
  }

  delete(i:number){
    this.marksFormArray.removeAt(i);
  }

}
