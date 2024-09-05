import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-amazon4',
  templateUrl: './amazon4.component.html',
  styleUrls: ['./amazon4.component.css']
})
export class Amazon4Component {

public  count:number=0;

  constructor(private _amazonService:AmazonService){
    _amazonService.getcount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
  }

}
