import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapReservationComponent } from './architecte/map-reservation/map-reservation.component';
import { ModifyReservationComponent } from './architecte/modify-reservation/modify-reservation.component';
import { ReservationComponent } from './architecte/reservation/reservation.component';
import { ResearchVolComponent } from './architecte/research-vol/research-vol.component';
import { ResultVolComponent } from './architecte/result-vol/result-vol.component';



@NgModule({
  declarations: [MapReservationComponent, ModifyReservationComponent, ReservationComponent, ResearchVolComponent, ResultVolComponent],
  imports: [
    CommonModule
  ]
})
export class ClientLayoutModule { }
