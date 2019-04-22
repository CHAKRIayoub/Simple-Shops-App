import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { environment } from 'src/environments/environment';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

  @Input() shop: Shop;
  images_link:string = environment.images_link+"/shops/";

  constructor(private shops_service:ShopsService) {
  }


  ngOnInit() {}


  likeOrDislikeShop(){ 

    this.shop.liked=!this.shop.liked;
    this.shops_service.like(this.shop.id, this.shop.liked).subscribe(
      ()=>{
        this.shops_service.refreshList();
      },
      ()=>{},
    );

  }


}
