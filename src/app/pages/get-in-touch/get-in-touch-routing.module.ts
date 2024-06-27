import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInTouchComponent } from './get-in-touch.component';

const routes: Routes = [
  {
    path:"",
    component:GetInTouchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInTouchRoutingModule { }
