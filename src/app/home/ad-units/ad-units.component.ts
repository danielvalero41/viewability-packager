import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-units',
  templateUrl: './ad-units.component.html',
  styleUrls: ['./ad-units.component.scss'],
})
export class AdUnitsComponent implements OnInit {
  isVisibleEdit: boolean = false;
  switchValue: boolean;
  isAddAdUnits: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  addAdUnit() {
    console.log('edit ad');
    this.isVisibleEdit = true;
  }

  closeModal() {
    this.isVisibleEdit = false;
  }

  createAdUnit() {
    this.isAddAdUnits = true;
  }
}
