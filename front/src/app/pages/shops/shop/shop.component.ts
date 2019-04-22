import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { environment } from 'src/environments/environment';
import { ShopsService } from 'src/app/services/shops.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Shop;
  images_link:string = environment.images_link+"/shops/";

  constructor(private shops_service:ShopsService, private message: NzMessageService) {
  }

  ngOnInit() {

  }

  likeShop(){

    this.shop.liked=!this.shop.liked;
    if(this.shop.liked) {
      this.message.success('Saved to Prefered List');
      this.shops_service.like(this.shop.id).subscribe(
        ()=>{},
        ()=>{},
      );
    }


  }

  dislike(){

  }


}
