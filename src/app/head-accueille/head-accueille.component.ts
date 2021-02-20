import { Component, OnInit } from '@angular/core';
import { AccueilleService } from '../services/accueille.service';

@Component({
  selector: 'app-head-accueille',
  templateUrl: './head-accueille.component.html',
  styleUrls: ['./head-accueille.component.scss'],

})
export class HeadAccueilleComponent implements OnInit {
  connect: String ="assets/images/connectionVrai2.png"
  constructor(private accueilleService:AccueilleService) { }
  ngOnInit(): void {
     this.accueilleService.mark  }

}
