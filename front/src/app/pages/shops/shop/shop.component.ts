import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { environment } from 'src/environments/environment';
import { ShopsService } from 'src/app/services/shops.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit, OnDestroy {

  @Input() shop: Shop;
  images_link:string = environment.images_link+"/shops/";
  subscriptions: Subscription[] = [];


  constructor(private shops_service:ShopsService) {
  }


  ngOnInit() {}


  likeOrDislikeShop(){ 

    this.shop.liked=!this.shop.liked;
    this.subscriptions.push( this.shops_service.like(this.shop.id, this.shop.liked).subscribe(
      (response)=>{
        this.shops_service.refreshList();
      },
      (error)=>{ },
    ));

  }

  ngOnDestroy(){
		this.subscriptions.forEach((subscription)=>{
			subscription.unsubscribe();
		})
	}


}
