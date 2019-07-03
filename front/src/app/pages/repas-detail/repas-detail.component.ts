import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './repas-detail.component.html',
  styleUrls: ['./repas-detail.component.css']
})
export class RepasDetailComponent implements OnInit {

  routeid = 0;

  constructor(  private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      this.routeid = params['id'];

    });
  }

}
