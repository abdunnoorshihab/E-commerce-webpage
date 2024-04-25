import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { LocationComponent } from './location/location.component';
import { ImagesComponent } from './images/images.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardComponent,
    ButtonComponent,
    NewArrivalsComponent,
    LocationComponent,
    ImagesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
