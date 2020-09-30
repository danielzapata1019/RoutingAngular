import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: 'prueba',
    component : PruebaComponent
  },
  {
    path:'modulo',
    loadChildren:()=> import('./modules/modules.module')
    .then(m => m.ModulesModule)
  },
  {
    path:'**',
    redirectTo:'https://www.google.com.co',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
