import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./simple-dynamic/simple-dynamic.module').then(m => m.SimpleDynamicModule)},
  { path: 'dynamic-routing', loadChildren: () => import('./dynamic-routing/dynamic-routing.module').then(m => m.DynamicModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
