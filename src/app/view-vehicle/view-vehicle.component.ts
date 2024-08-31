import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {
  public vehicle: any = {};

  constructor(private _activatedRouter: ActivatedRoute, private _vehicleService: VehicleService) {

    _activatedRouter.params.subscribe(
      (data: any) => {
        console.log(data.id);

        _vehicleService.getvehicle(data.id).subscribe(
          (data: any) => {
            this.vehicle = data;
          }
        )
      }
    )
  }
}
