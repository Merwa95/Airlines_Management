import { AddLigneComponent } from './add-ligne.component';
import { AddLigneModule } from './add-ligne.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: AddLigneComponent, children: [] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLigneRoutingModule { }
