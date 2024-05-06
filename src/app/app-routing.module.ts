import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
       {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
       },
       {
        path:"home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
       },
       {
        path:"next",
        loadChildren: () => import('./pages/get-in-touch/get-in-touch.module').then(m => m.GetInTouchModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
