import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';
import { Router } from '../../../../node_modules/@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-index',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  mesCommande:any[]=[];
  prix_total;
  tables:[];
  userID;
  tableSelected;
  logged:boolean;
  switchValue = false;
  constructor(private notification: NzNotificationService, private repasService:RepasService ,private http: HttpClient, private auth_service:AuthService, private token_service:TokenService,private router: Router
    
    ) {

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

    this.logged = this.token_service.loggedIn();
    console.log(this.logged);
    if(this.logged){
      this.userID = JSON.parse(localStorage.getItem('user')).id;
      console.log(this.userID);
    }
    
     // listen for login or logout events
     this.auth_service.authStatut.subscribe(
      (data)=>{ 
        this.logged = data; 
      }
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


  sendCheckout(){
    var commandes = { "repas": this.mesCommande, "prix_ttc": this.prix_total, "table_id": this.tableSelected,"client_id":this.userID,"accompanies":this.repasService.accompanies,"emporter":this.switchValue };
    this.repasService.addCommande(commandes).subscribe(
      (response:any) => {
        this.router.navigate(['/result']);
        this.notification.create(
          'success',
          'Notification',
          'Votre Commande  est bien crée '
        );
        this.repasService.commande.forEach((item)=>{
          this.repasService.lastCommande.push(item)
        })
        this.repasService.commande = [];
      },
      (error) => {console.log('erreur');
        
      });
  }

  checkout(){
    if(this.logged){
      this.sendCheckout();
    }else{
      this.auth_service.openModal();
    }
  }

  changeEmporter(){
    console.log(this.switchValue);
  }


  deleteRepas(Commande){

    this.mesCommande = this.mesCommande.filter((item)=>{
      return item != Commande;
    });

    this.mesCommande.splice(this.mesCommande.indexOf(Commande),1 );


    this.repasService.commande = this.mesCommande.filter((item)=>{
      return item != Commande;
    });

    this.repasService.commande.splice(this.mesCommande.indexOf(Commande),1 );

    
  }


}
