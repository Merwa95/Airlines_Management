import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { EmployeLayoutModule } from './layouts/employe-layout/employe-layout.module';
import { ClientLayoutModule } from './layouts/client-layout/client-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { MapVolComponent } from './shared-modules/map-vol/map-vol.component';
import { AddVolComponent } from './shared-modules/add-vol/add-vol.component';
import { ModifyVolComponent } from './shared-modules/modify-vol/modify-vol.component';
import { ArchitecteComponent } from './client-layout/architecte/architecte.component';
import { MapReservationComponent } from './client-layout/architecte/map-reservation/map-reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    MapVolComponent,
    AddVolComponent,
    ModifyVolComponent,
    ArchitecteComponent,
    MapReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    ClientLayoutModule,
    EmployeLayoutModule,
    LoginLayoutModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
