import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss'],
})
export class PlacementsComponent implements OnInit {
  isAddPlacements: boolean;
  isVisible: boolean;
  constructor() {}

  ngOnInit(): void {}

  addPlacements() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  //Create Placements
  createPlacements() {
    this.isAddPlacements = true;
  }

  cancelePlacements() {
    this.isAddPlacements = false;
  }
}
