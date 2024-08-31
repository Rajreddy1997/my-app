import { Component } from '@angular/core';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-student-id-card',
  templateUrl: './student-id-card.component.html',
  styleUrls: ['./student-id-card.component.css']
})
export class StudentIdCardComponent {

  public studentidcards:any=[]; 
  public term:string="";

  public column:string="";
  public order:string="";

  public count:string="";
  public page:string="";
  

  constructor(private _studentidcard:StudentIdCardService){
    _studentidcard.getstudentidcards().subscribe(
      (data:any)=>{
        this.studentidcards=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  filter(){
    this._studentidcard.getfilteredstudentidcards(this.term).subscribe(
      (data:any)=>{
        this._studentidcard=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  sort(){
      this._studentidcard.getfilteredstudentidcards(this.column).subscribe(
        (data:any)=>{
          this._studentidcard=data;
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
  }
  limit(){
    this._studentidcard.getfilteredstudentidcards(this.count).subscribe(
      (data:any)=>{
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
}
