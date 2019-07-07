import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { environment } from "./../../../environments/environment";
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  
    repas:any[];
    logocategorie=environment.logoCatgorie;
    categories:any[];
    showedCat='all';

    constructor(private repasService:RepasService,private notification: NzNotificationService) { 
        this.notification.create(
            'info',
            'Notification',
            'Bienvenu a votre restaurant'
          );
        this.repasService.getCategories().subscribe((response:any)=>{
            this.categories = response;
            console.log(this.categories);
            this.repasService.getRepas().subscribe((response:any)=>{
                this.repas=response;
                this.repas.forEach(element => {
                    element['categorie_name'] = this.categories.filter((c)=>{
                        return c.id == element.categorie_id;
                    })[0].name;
                });
                console.log(this.repas);
            },
            (error)=>{ 
                console.log(error); 
            });
        });


        this.repasService.getRepas().subscribe((response:any)=>{
            this.repas=response;
            console.log(this.repas);
        },
        (error)=>{ 
            console.log(error); 
        });



    }

    ngOnInit() {

    }

    gotoRepa(repa){
        this.repasService.getRepa(repa);
    }

}