import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ErrorComponent } from 'src/app/shared/modals/error/error.component';
import { Placements } from '../model/placements';
import { ApiAdManagerService } from '../services/api-ad-manager.service';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss'],
})
export class PlacementsComponent implements OnInit {
  listRules: any;
  isAddPlacements: boolean;

  detailsPlacements: Placements;
  listStatus;
  listReglasCompletas;
  listReglas;
  isVisible;
  listReglasTemp: any;
  height_calculate: any = 0;

  formPlacement: FormGroup;
  formAddPlacements: FormGroup;

  constructor(
    public fb: FormBuilder,
    public apiAdManager: ApiAdManagerService,
    private modalService: NzModalService
  ) {
    this.formPlacement = this.fb.group({
      name: [''],
      status: [''],
      description: [''],
    });

    this.formAddPlacements = this.fb.group({
      name: [''],
      status: [''],
      description: [''],
    });
  }

  get f() {
    return this.formPlacement.controls;
  }

  get fCreate() {
    return this.formAddPlacements.controls;
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewChecked(): void {
    this.height_calculate = document.getElementById('heigth')?.clientHeight;
    // debugger;
  }

  loadData() {
    this.apiAdManager.getListPlacements().subscribe(
      (resp) => {
        console.log(resp);
        this.listRules = resp.message;
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiAdManager.placementsConfig().subscribe(
      (resp) => {
        console.log(resp);
        this.listStatus = resp.message.status;
        this.listReglasCompletas = resp.message.reglas;
        this.listReglasCompletas.forEach((element) => {
          delete element.selected;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  recivedAdUnit(data) {
    console.log(data);
    this.apiAdManager.detailsPlacements(data).subscribe(
      (resp) => {
        // console.log(resp);
        this.isAddPlacements = false;
        this.detailsPlacements = resp.message[0];
        // this.listReglasCompletas = resp.message[0].rules;
        this.initFormPlacements(this.detailsPlacements);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  initFormPlacements(data) {
    this.f.name.setValue(data.name);
    this.f.status.setValue(data.status);
    this.f.description.setValue(data.description);
    this.listReglas = data.rules;
    // debugger;
  }

  editReglas() {
    // this.isVisible = true;
    this.apiAdManager.placementsConfig().subscribe(
      (resp) => {
        console.log(resp);
        this.isVisible = true;
        let listTemp = [...this.listReglas];
        this.listReglas = [];
        this.listReglas = listTemp;
        this.listReglasCompletas = resp.message.reglas;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeModal(e) {
    console.log('Cerro modal lista', this.listReglas);
    console.log('Cerro modal lista', this.listReglasCompletas);

    this.isVisible = e;
  }

  closeModal2() {
    this.isVisible = false;
  }

  changeData(data) {
    this.listReglas = data;
    // debugger;
  }

  addPlacements() {
    this.isVisible = true;
  }

  cancelePlacements() {
    this.isAddPlacements = false;
    this.listReglas = this.listReglasTemp;
  }

  initFormCreatePlacements() {
    this.formAddPlacements.reset();
    this.fCreate.status.setValue('ACTIVE');
  }

  doneCreate() {
    console.log(this.formAddPlacements.value);
    console.log(this.listReglas);

    let rules = {
      rules: this.listReglas,
    };

    let body = {
      ...this.detailsPlacements,
      ...this.formAddPlacements.value,
      ...rules,
    };

    body.id = null;

    let data = [];

    data.push(body);

    this.apiAdManager.editarPlacements(data).subscribe(
      (resp) => {
        console.log(resp);

        this.apiAdManager.getListPlacements().subscribe(
          (resp) => {
            console.log(resp);
            this.listRules = resp.message;
            this.isAddPlacements = false;
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
        let msjError = error.error.message;
        this.modalService.create({
          nzMaskClosable: true,
          nzCancelText: null,
          nzOkText: null,
          nzClosable: false,
          nzFooter: null,
          nzComponentParams: { solicitRecibida: msjError },
          nzWidth: 500,
          nzContent: ErrorComponent,
        });
      }
    );
  }

  done() {
    console.log(this.formPlacement.value);
    console.log(this.listReglas);

    // this.listReglas.forEach((element) => {
    //   delete element.selected;
    // });

    let rules = {
      rules: this.listReglas,
    };

    let body = {
      ...this.detailsPlacements,
      ...this.formPlacement.value,
      ...rules,
    };
    console.log(body);

    let data = [];
    data.push(body);

    this.apiAdManager.editarPlacements(data).subscribe(
      (resp) => {
        console.log(resp);
        this.apiAdManager.getListPlacements().subscribe(
          (resp) => {
            console.log(resp);
            this.listRules = resp.message;
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

  createPlacements() {
    this.isAddPlacements = true;

    this.listReglasTemp = this.listReglas;
    this.listReglas = [];
    this.initFormCreatePlacements();
  }

  filterButton(filter) {
    let body = {
      status: filter,
    };
    this.apiAdManager.filterListPlacements(body).subscribe(
      (resp) => {
        console.log(resp);
        this.listRules = resp.message;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
