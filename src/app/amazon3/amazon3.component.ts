import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-amazon3',
  templateUrl: './amazon3.component.html',
  styleUrls: ['./amazon3.component.css']
})
export class Amazon3Component {
  public count:number=0;

  constructor(private _amazonService:AmazonService){
    _amazonService.getcount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
  }

}
