import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }


/**
 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AdminLayoutComponent } from './admin-layout.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/shared-modules/material/materials/materials.module';
import { MapLigneComponent } from './architecte/map-ligne/map-ligne.component';
import { AddLigneComponent } from './architecte/add-ligne/add-ligne.component';
import { MapUserComponent } from './architecte/map-user/map-user.component';
import { AddUserComponent } from './architecte/add-user/add-user.component';
import { ModifyUserComponent } from './architecte/modify-user/modify-user.component';
import { ModifyLigneComponent } from './architecte/modify-ligne/modify-ligne.component';


@NgModule({
  declarations: [ HeaderComponent,AdminLayoutComponent, MapLigneComponent, AddLigneComponent, MapUserComponent, AddUserComponent, ModifyUserComponent, ModifyLigneComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule
  ]
})
export class AdminLayoutModule { }
 */