import { AdminLayoutComponent } from './admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./architecte/map-ligne/map-ligne-routing.module`)
          .then(m => m.MapLigneRoutingModule)
      },
      {
        path: 'user',
        loadChildren: () => import(`./architecte/map-user/map-user.module`)
          .then(m => m.MapUserModule)
      },
      {
        path: 'ligne',
        loadChildren: () => import(`./architecte/map-ligne/map-ligne-routing.module`)
          .then(m => m.MapLigneRoutingModule)
      },
      {
        path: '**',
        component: AdminLayoutComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
