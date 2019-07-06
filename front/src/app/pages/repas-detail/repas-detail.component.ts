import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepasService } from 'src/app/services/repas.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-index',
  templateUrl: './repas-detail.component.html',
  styleUrls: ['./repas-detail.component.css']
})
export class RepasDetailComponent implements OnInit {
  accompany: any[] = [];
  routeid = 0;
  repaSelected;
  accompagners:any;
  constructor(  private route: ActivatedRoute, private router: Router,private repasService:RepasService,private notification: NzNotificationService ) {  
  }

  ngOnInit() {
    this.repaSelected=this.repasService.repasSelected;
    this.repaSelected.qte=1;
    console.log(this.repaSelected);
    this.route.params.subscribe((params) => {
      this.routeid = params['id'];
    });
    this.repasService.getAccompagners().subscribe(
      (response:any)=>{
       this.accompagners=response;
       console.log(this.accompagners);
      },
      (error)=>{ },
    ); 
  }

  checkAccom(accompagner) {
    
    accompagner.show = accompagner.show ? false : true;
		if (accompagner.show) {
      accompagner.repas_id=this.repaSelected.id;
			this.accompany[this.accompany.length] = accompagner;
		}
   
    this.repasService.accompanies=this.accompany;
    console.log( this.repasService.accompanies);
	}
  btnPlus(){
    var y = +this.repaSelected.qte;
    this.repaSelected.qte=y +1;
    console.log(this.repaSelected.qte);

  }
  btnminus(){
    if(this.repaSelected.qte > 1){
      this.repaSelected.qte=this.repaSelected.qte -1;
    }
  }
  addtoCart(){
    this.repasService.prix_total+=this.repaSelected.price_unit * this.repaSelected.qte;
    this.repasService.commande.push(this.repaSelected);
    console.log(this.repasService.commande);
    this.notification.create(
      'success',
      'Notification',
      'Votre choix est ajouté au panier avec succes.'
    );
  }
}
