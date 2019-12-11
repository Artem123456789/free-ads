import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdsService } from '../services/ads.service';
import { Comment } from '../classes/comment/comment';
import { Ad } from '../classes/ad/ad';

@Component({
  selector: 'app-single-ad',
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.css']
})
export class SingleAdComponent implements OnInit {

  constructor(private adsSerice: AdsService, private activatedRouter: ActivatedRoute) {
    this.adId = activatedRouter.snapshot.params['id'];
    this.ad = this.adsSerice.ads[this.adId];
  }

  ngOnInit() {
  }

  private adId: number;
  private ad: Ad;

}
