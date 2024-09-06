import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    UpiComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
