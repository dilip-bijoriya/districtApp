import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pages',
    loadChildren:()=>import('./layout/full-layout/full.module').then(m=>m.FullModule)
  },
  {
    path: '',
   loadChildren: () => import('./layout/simple-layout/simple.module').then(m => m.SimpleModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
