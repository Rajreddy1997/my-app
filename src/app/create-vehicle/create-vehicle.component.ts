import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string="";

  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      cost: new FormControl(),
    }
  )

  constructor(private _vehicleSerice:VehicleService, private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id); 
      this.id =data.id;
    _vehicleSerice.getvehicle(this.id).subscribe((data)=>{
      // console.log(data)
      this.vehicleForm.patchValue(data);

    })
      }
    )
  }
    create(){
    // console.log(this.vehicleForm.value );

    if(this.id){

    this._vehicleSerice.updateVehicle(this.vehicleForm.value,this.id).subscribe((result)=>[
      alert("Update Successfully")
    ])
    
  }
  else{
    this._vehicleSerice.createVechicle(this.vehicleForm).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
        this.vehicleForm.reset();
      },
      (err:any)=>{
        alert("creation failed");
      }
    )
  }
}
}
