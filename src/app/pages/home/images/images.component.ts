import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  items: any= [
    {img:'./assets/images/brand/png/footerItem1.png'},
    {img:'./assets/images/brand/png/footerItem2.png'},
    {img:'./assets/images/brand/png/footerItem3.png'},
    {img:'./assets/images/brand/png/footerItem4.png'},
    {img:'./assets/images/brand/png/footerItem5.png'},
    {img:'./assets/images/brand/png/footerItem6.png'},
  ];
}
