import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiAdManagerService } from '../services/api-ad-manager.service';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss'],
})
export class PlacementsComponent implements OnInit {
  listRules: any;
  isAddPlacements: boolean;

  detailsPlacements: any;
  listStatus;
  listReglasCompletas;
  listReglas;
  isVisible;

  formPlacement: FormGroup;

  constructor(
    public fb: FormBuilder,
    public apiAdManager: ApiAdManagerService
  ) {
    this.formPlacement = this.fb.group({
      name: [''],
      status: [''],
      description: [''],
    });
  }

  get f() {
    return this.formPlacement.controls;
  }

  ngOnInit(): void {
    this.loadData();
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
        console.log(resp);
        this.isAddPlacements = false;
        this.detailsPlacements = resp.message[0];
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
    this.listReglas = data.rules;
    debugger;
  }

  editReglas() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
