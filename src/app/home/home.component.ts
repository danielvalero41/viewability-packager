import { Component, OnInit } from '@angular/core';
import { ApiAdManagerService } from './services/api-ad-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public apiAdManager: ApiAdManagerService) {}

  ngOnInit(): void {}

  sincronizar() {
    this.apiAdManager.resetAdUnits().subscribe(
      (resp) => {
        console.log(resp);
        this.apiAdManager.resetPlacements().subscribe(
          (resp) => {
            console.log(resp);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
