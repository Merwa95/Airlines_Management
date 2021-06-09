import { ModifyLigneModule } from './modify-ligne/modify-ligne.module';
import { MapLigneComponent } from './map-ligne.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: MapLigneComponent, children: [
      {
        path: 'modification',
        loadChildren: () => import(`./modify-ligne/modify-ligne.module`)
          .then(m => m.ModifyLigneModule)
      },
      {
        path: 'Ajout',
        loadChildren: () => import(`./add-ligne/add-ligne.module`)
          .then(m => m.AddLigneModule)
      },

      {
        path: 'Vol',
        loadChildren: () => import(`src/app/shared-modules/map-vol/map-vol.module`)
          .then(m => m.MapVolModule)
      },

      {
        path: '**',
        component: MapLigneComponent,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapLigneRoutingModule { }
