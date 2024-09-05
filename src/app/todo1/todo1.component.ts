import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {
  public text:string="";
  public time:string="";

  constructor(private _todoService:TodoService){}

create(){
   this._todoService.setText(this.text)
   this._todoService.setTime(this.time)
}

reset(){
  this._todoService.setText(this.text)
  this._todoService.setText(this.time)
  location.reload();
  this.text="";
  this.time="";
}

  }

