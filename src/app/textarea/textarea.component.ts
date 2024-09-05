import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  public text:string="";
  public count:number=0;

  @Input() public max:number=0;

  countchar(){
    if(this.count<=this.max){
      this.count=this.text.length;
    }
  }
}
