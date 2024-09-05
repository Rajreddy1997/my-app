import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon2',
  templateUrl: './amazon2.component.html',
  styleUrls: ['./amazon2.component.css']
})
export class Amazon2Component {

  public count:number=0;

  constructor(private _amazonService:AmazonService){
    _amazonService.getcount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
  }
 
}
