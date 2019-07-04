import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepasService } from 'src/app/services/repas.service';

@Component({
  selector: 'app-index',
  templateUrl: './repas-detail.component.html',
  styleUrls: ['./repas-detail.component.css']
})
export class RepasDetailComponent implements OnInit {

  routeid = 0;
  repaSelected;
  accompagners:any;
  constructor(  private route: ActivatedRoute, private router: Router,private repasService:RepasService ) { }

  ngOnInit() {
    this.repaSelected=this.repasService.repasSelected;
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

}
