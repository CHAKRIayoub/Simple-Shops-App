import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';

@Component({
  selector: 'app-index',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  mesCommande:any[]=[];
  prix_total;
  tables:[];
  tableSelected;
  constructor( private repasService:RepasService ) { 
    this.mesCommande=this.repasService.commande;
    this.prix_total=this.repasService.prix_total;
    console.log(this.mesCommande);
    this.repasService.gettables().subscribe(
      (response:any)=>{
       this.tables=response;
       console.log(this.tables);
      },
      (error)=>{ },
    );
  }

  ngOnInit() {
    
  }

  btnPlus(Commande){
    var y = +Commande.qte;
    Commande.qte=y +1;
    console.log(Commande);

  }
  btnminus(Commande){
    if(Commande.qte > 1){
      Commande.qte=Commande.qte -1;
    }
    console.log(Commande);
  }

  calculerPrixttc(){
    this.prix_total=0;
    this.mesCommande.forEach(element => {
      this.prix_total+=element.qte * element.price_unit;
    });
    return this.prix_total;
  }
  getPrixtotal(){
    this.prix_total=this.repasService.prix_total;
    return this.prix_total;
  }

  checkout(){
    var commandes = JSON.stringify([{ "repas": this.mesCommande, "prix_ttc": this.prix_total, "table_id": this.tableSelected,"client_id":1 }]);
    console.log(commandes);
  }


}
