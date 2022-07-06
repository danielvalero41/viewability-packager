import { Component, OnInit } from '@angular/core';
import { ApiAdManagerService } from 'src/app/home/services/api-ad-manager.service';

@Component({
  selector: 'app-up-change-manager',
  templateUrl: './up-change-manager.component.html',
  styleUrls: ['./up-change-manager.component.scss'],
})
export class UpChangeManagerComponent implements OnInit {
  apiBusy: boolean = true;

  constructor(public apiAdManager: ApiAdManagerService) {}

  ngOnInit(): void {
    this.apiAdManager.loadAdunitsAdmanager().subscribe(
      (resp) => {
        console.log(resp);
        this.apiAdManager.loadPlacementsAdmanager().subscribe(
          (resp) => {
            console.log(resp);
            this.apiAdManager.resetAdUnits().subscribe(
              (resp) => {
                console.log(resp);
                this.apiAdManager.resetPlacements().subscribe(
                  (resp) => {
                    console.log(resp);
                    this.apiBusy = false;
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
