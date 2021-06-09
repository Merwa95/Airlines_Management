import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [

   { path: '', component: HomeLayoutComponent, },
  
  
  {
    path: 'login',
    loadChildren: () => import('./layouts/login-layout/login-layout.module')
      .then(mod => mod.LoginLayoutModule)
  },
  //{ path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
