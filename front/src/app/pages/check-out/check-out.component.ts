import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';

@Component({
  selector: 'app-index',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

 
  constructor( private repasService:RepasService ) { }

  ngOnInit() {
    
  }

}
