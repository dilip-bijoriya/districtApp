
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from 'src/app/pages';
import { SimpleLayoutComponent } from './simple-layout.component';



const routes: Routes = [{
    path: '', 
    component: SimpleLayoutComponent,
    data: { title: 'signin'},
    children: [
      {
        path: '', redirectTo: 'signin', pathMatch: 'full',
      },
      {
        path: 'signin',component: SigninComponent,  
      }

    ]
  },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SimpleRoutingModule { }