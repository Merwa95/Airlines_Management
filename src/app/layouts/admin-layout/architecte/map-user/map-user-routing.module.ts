import { MapUserComponent } from './map-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: MapUserComponent, children: [
      {
        path: 'modification',
        loadChildren: () => import(`./modify-user/modify-user.module`)
          .then(m => m.ModifyUserModule)
      },
      {
        path: 'Ajout',
        loadChildren: () => import(`./add-user/add-user.module`)
          .then(m => m.AddUserModule)
      },
      {
        path: '**',
        component: MapUserComponent,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapUserRoutingModule { }
