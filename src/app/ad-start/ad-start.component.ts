import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../classes/ad/ad';

@Component({
  selector: 'app-ad-start',
  templateUrl: './ad-start.component.html',
  styleUrls: ['./ad-start.component.css']
})
export class AdStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() ad: Ad;

}
