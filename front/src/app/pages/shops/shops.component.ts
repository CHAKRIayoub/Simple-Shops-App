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
  Filtredshops:Shop[];
  FiltreBy:string='nearby';

  constructor(private shops_service:ShopsService) {
    
    this.shops=[];
    this.Filtredshops=[];
    this.initShops();

    shops_service.refreshListObservable.subscribe( () => {
      this.switchList(this.FiltreBy);
    });

  }


  ngOnInit() {}

  // get the list of shops & filtre it
  initShops() {

    this.shops_service.getShops().subscribe(
      (shops:Shop[])=>{
        this.shops = shops;
        shops.sort(this.compareShopesByDistance );
        this.switchList('nearby')
      },
      (error)=>{
        console.log(error)
      }
    );
  
  }


  // switch betwen preferred & nearby lists depends on str entry
  switchList(str){

      this.FiltreBy = str;
      this.Filtredshops = this.shops.filter((shop)=>{ 
        return ((str=='nearby')) ? !shop.liked : shop.liked  ;
      })
  
  }


  compareShopesByDistance(a:Shop, b:Shop):number{

    if ( a.distance < b.distance ) return -1;
    if ( a.distance > b.distance ) return 1;
    return 0;
  
  }


}
