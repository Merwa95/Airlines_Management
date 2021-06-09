import { LoginLayoutComponent } from './login-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';


@NgModule({
  declarations: [ LoginLayoutComponent],
  imports: [
    CommonModule,
    LoginLayoutRoutingModule
  ]
})
export class LoginLayoutModule { }
