import { Component } from '@angular/core';
import { FOOTER_DB } from 'src/app/core/db/footer.db';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
  items: any[]= FOOTER_DB;
}
