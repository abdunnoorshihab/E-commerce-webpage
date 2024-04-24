import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardComponent,
    ButtonComponent,
    NewArrivalsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
