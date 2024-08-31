import { Component } from '@angular/core';
import { FilpkartpageService } from '../filpkartpage.service';

@Component({
  selector: 'app-filpkartpage',
  templateUrl: './filpkartpage.component.html',
  styleUrls: ['./filpkartpage.component.css']
})
export class FilpkartpageComponent {
  public filpkartpages:any=[];
constructor(private _filpkartpageservice:FilpkartpageService){
  _filpkartpageservice.getflipkartpage().subscribe(
    (data:any)=>{
      this.filpkartpages=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
  }
  
  }
