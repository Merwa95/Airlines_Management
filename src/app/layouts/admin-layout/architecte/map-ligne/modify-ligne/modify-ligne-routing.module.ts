import { ModifyLigneComponent } from './modify-ligne.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: ModifyLigneComponent, children: [] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyLigneRoutingModule { }
