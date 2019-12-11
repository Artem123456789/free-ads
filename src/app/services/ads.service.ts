import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { 
    this.fetchAds().subscribe(data=>{
      this._ads = Object.assign(this._ads, data);
    });
  }

  private _ads: any = [];

  public get ads(){
    return this._ads;
  }

  public fetchAds(){
    const url = 'assets/ads.json';
    return this.http.get(url);
  }

  // public addAd(newAd: Ad){
  //   this._ads.push({
  //     id: newAd.id,
  //     authorId: newAd.authorId,
  //     name: newAd.name,
  //     text: newAd.text,
  //     date: `${newAd.date.getFullYear()}-${newAd.date.getDate()}-${newAd.date.getUTCDate()}`,
  //     comments: []
  //   });
  //   console.log(this.ads);
  // }

}
