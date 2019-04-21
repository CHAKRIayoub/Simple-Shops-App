import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Shop;
  images_link:string = environment.images_link+"/shops/"

  constructor() {
  }

  ngOnInit() {

  }


}
