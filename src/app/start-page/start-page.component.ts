import { Component, OnInit } from '@angular/core';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private adsService: AdsService) { 
  }

  ngOnInit() {
  }

}
