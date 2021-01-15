import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { EmployeLayoutModule } from './layouts/employe-layout/employe-layout.module';
import { ClientLayoutModule } from './layouts/client-layout/client-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    ClientLayoutModule,
    EmployeLayoutModule,
    LoginLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
