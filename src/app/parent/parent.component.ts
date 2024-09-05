import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public ap:string="";
  public bp:string="";

  public text:string="";
  public maxvalue:number=0;

  catch(value:string){
    this.bp=value;
  }
      
    }
  


