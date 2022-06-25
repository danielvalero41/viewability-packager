import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-units',
  templateUrl: './ad-units.component.html',
  styleUrls: ['./ad-units.component.scss'],
})
export class AdUnitsComponent implements OnInit {
  isVisible: boolean;
  switchValue: boolean;
  isAddAdUnits: boolean;
  constructor() {}

  ngOnInit(): void {}

  addAdUnit() {
    console.log('edit ad');
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  //Create AdUnits
  createAdUnit() {
    this.isAddAdUnits = true;
  }

  cancelAddAdUnit() {
    this.isAddAdUnits = false;
  }
}
