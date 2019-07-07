import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-index',
  templateUrl: './result.html',
  styleUrls: ['./result.css']
})
export class ResultComponent implements OnInit {

  public printFacture()  
  {  

    console.log('this.repasService.lastCommande', this.repasService.lastCommande)

    var doc = new jspdf();

    doc.setFontSize(20)
    doc.text(10, 20, 'Khouloud Restaurant')
    doc.setFontSize(10)
    doc.text(10, 30, 'N 23 Avenu des FARs, wilaya, Tetouan')
    doc.text(10, 35, 'Fixe : 0529456789')
    doc.text(10, 40, 'Email : kholoud@gmail.com')
    var d = new Date();
    doc.text(160,20,' Date : '+ d.getDate() + '/' + (d.getMonth()+1) + '/'+d.getFullYear())

    var user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user)

    doc.setFontSize(15)
    doc.text(120, 40, 'client : '+user.name)
    doc.setFontSize(10)
    doc.text(120, 45, 'Email : '+user.email)


    doc.setFontSize(15)
    doc.text(10, 70, 'Repas')
    doc.text(60, 70, 'Prix (DH)')
    doc.text(110, 70, 'Quantité')
    doc.text(160, 70, 'Total')
    doc.line(5,74,205,74)
    doc.setFontSize(12)

    var tt = 80; 
    var total = 0;
    this.repasService.lastCommande.forEach((command)=>{
      tt+=5;
      doc.text(10, tt, command.name)
      doc.text(60, tt,''+command.price_unit)
      doc.text(110, tt, ''+command.qte)
      total += command.price_unit * command.qte;

      doc.text(160, tt, ''+total)
    })


    doc.line(140,tt+15,190,tt+15);

    doc.setFontSize(20)
    doc.text(140,120,'Total :'+total);

    doc.save('facture');

  }  


  mesCommande:any[]=[];
  prix_total;
  tables:[];
  tableSelected;
  logged:boolean;
  constructor( private repasService:RepasService , private auth_service:AuthService, private token_service:TokenService,
    
    ) { 

     
      
    this.mesCommande=this.repasService.lastCommande;
    this.prix_total=this.repasService.prix_total;


    this.repasService.gettables().subscribe(
      (response:any)=>{
       this.tables=response;
       console.log(this.tables);
      },
      (error)=>{ },
    );

    this.logged = this.token_service.loggedIn();

     // listen for login or logout events
     this.auth_service.authStatut.subscribe(
      (data)=>{ 
        this.logged = data; 
      }
    );


  }

  ngOnInit() {
    this.mesCommande=this.repasService.commande;
    console.log('this.repasService.lastCommande', this.repasService.lastCommande)

  }


}
