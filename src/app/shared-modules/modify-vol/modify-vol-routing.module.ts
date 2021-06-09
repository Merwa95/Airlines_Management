import { ModifyVolComponent } from './modify-vol.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ { path: '', component: ModifyVolComponent, children: [] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyVolRoutingModule { }
