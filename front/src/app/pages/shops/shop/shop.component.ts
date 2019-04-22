import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() refreshListEvent = new EventEmitter<number>();
  images_link:string = environment.images_link+"/shops/";

  constructor(private shops_service:ShopsService, private message: NzMessageService) {
  }

  ngOnInit() {

  }

  likeShop(){

    this.shop.liked=!this.shop.liked;
    this.shops_service.like(this.shop.id, this.shop.liked).subscribe(
      ()=>{
        this.message.success( (this.shop.liked) ?'Saved to': 'removed from' + 'your Preferred List');
        this.shops_service.refreshList();
        console.log('shop');
      },
      ()=>{},
    );


  }

  dislike(){

  }


}
