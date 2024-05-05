import { Component } from '@angular/core';
import { PRODUCTS_DB } from 'src/app/core/db/products.db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  items: any[] = PRODUCTS_DB;
  

}
