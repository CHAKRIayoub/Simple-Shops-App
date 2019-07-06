import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-index',
  templateUrl: './myshops.component.html',
  styleUrls: ['./myshops.component.css']
})
export class myshopsComponent implements OnInit {
  
  constructor( private repasService:RepasService ,private http: HttpClient,) { 
    
  }

  ngOnInit() {
    
  }




}
