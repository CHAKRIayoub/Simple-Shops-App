import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ListShopsComponent implements OnInit {

  shops:Shop[];

  constructor(private shops_service:ShopsService) {
    this.initShops()
  }

  ngOnInit() {

  }

  initShops() {
    this.shops_service.getShops().subscribe(
      (shops:Shop[])=>{

        this.shops = shops;
        shops.sort(this.compareShopesByDistance );

      },
      
      (error)=>{
        console.log(error)
      }
    );
  }

  switchList(str){

  }

  compareShopesByDistance(a:Shop, b:Shop):number{
    if ( a.distance < b.distance ){
      return -1;
    }
    if ( a.distance > b.distance ){
      return 1;
    }
    return 0;
  }

}
