import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInTouchRoutingModule } from './get-in-touch-routing.module';
import { GetInTouchComponent } from './get-in-touch.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
// import { NavbarComponent } from './top-banner/navbar/navbar.component';


@NgModule({
  declarations: [
    GetInTouchComponent,
    TopBannerComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    GetInTouchRoutingModule
  ]
})
export class GetInTouchModule { }
