import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-units',
  templateUrl: './ad-units.component.html',
  styleUrls: ['./ad-units.component.scss'],
})
export class AdUnitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  editAd() {
    console.log('edit ad');
  }
}
