import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon1',
  templateUrl: './amazon1.component.html',
  styleUrls: ['./amazon1.component.css']
})
export class Amazon1Component {

  public count:number=0;

  constructor(private _amazonService:AmazonService){}

  add(){
this._amazonService.addtocart();
  }

}
