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
  FiltreBy:string;

  constructor(private shops_service:ShopsService) {
    this.shops=[];
    this.Filtredshops=[];
    this.initShops();

    shops_service.refreshListObservable.subscribe( () => {
        this.refreshList();
        console.log('subscribed cible');
    });
  }

  ngOnInit() {

  }

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

  switchList(str){
      this.FiltreBy = str;
      this.Filtredshops = this.shops.filter((shop)=>{ 
        return ((str=='nearby')) ? !shop.liked : shop.liked  ;
      })
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

  refreshList(){
    // this.shops.forEach((shop,index) => {
    //   if(shop.id==e){
    //     this.shops[index].liked = !this.shops[index].liked;
    //   }
    // });
    this.switchList(this.FiltreBy);
    console.log(' =======> ');
  }

}
