import { AddUserComponent } from './add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: AddUserComponent, children: [] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule { }
