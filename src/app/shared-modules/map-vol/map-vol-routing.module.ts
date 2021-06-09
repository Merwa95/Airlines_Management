import { MapVolComponent } from './map-vol.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: MapVolComponent, children: [
      {
        path: 'modification',
        loadChildren: () => import(`src/app/shared-modules/modify-vol/modify-vol.module`)
          .then(m => m.ModifyVolModule)
      },
      {
        path: 'Ajout',
        loadChildren: () => import(`src/app/shared-modules/add-vol/add-vol.module`)
          .then(m => m.AddVolModule)
      },

      {
        path: 'Vol',
        loadChildren: () => import(`src/app/shared-modules/map-vol/map-vol.module`)
          .then(m => m.MapVolModule)
      },

      {
        path: '**',
        component:MapVolComponent,
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapVolRoutingModule { }
