import { Component, Host, OnInit } from '@angular/core';
import { NzModalComponent, NzModalRef } from 'ng-zorro-antd/modal';
import { ApiAdManagerService } from 'src/app/home/services/api-ad-manager.service';

@Component({
  selector: 'app-sincronizar',
  templateUrl: './sincronizar.component.html',
  styleUrls: ['./sincronizar.component.scss'],
})
export class SincronizarComponent implements OnInit {
  apiBusy: boolean = true;

  constructor(
    public apiAdManager: ApiAdManagerService,
    private modal: NzModalRef
  ) {}

  ngOnInit(): void {
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
  }

  closeModal() {
    this.modal.destroy();
  }
}
