import { Component, TemplateRef } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  public vehicles:any =[];
  public term:string="";

  public column:string="";
  public order:string="";

  constructor(private _vehicleService:VehicleService,private _router:Router){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  filter(){
    this._vehicleService.getfilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },

      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  sort(){
     this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error ");
      }
     )  
  }
  delete(id:string){
    this._vehicleService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }

    )
  }
  view(id:string){
    this._router.navigateByUrl("/dashboard/view-vehicle/"+id);
  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id)
  }
}
