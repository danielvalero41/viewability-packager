import { ApiAdManagerService } from './../services/api-ad-manager.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UpChangeManagerComponent } from 'src/app/shared/modals/up-change-manager/up-change-manager.component';
import { SincronizarComponent } from 'src/app/shared/modals/sincronizar/sincronizar.component';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  formModal: FormGroup;

  isConfigReport: boolean;
  isVisible: boolean;
  isVisibleTest: boolean;
  listConfig = [
    {
      Websites: [
        'AZD-TVAzteca',
        'AZD-Azteca-7',
        'AZD-AztecaUno',
        'AZD-Azteca-Deportes',
        'AZD-AztecaNoticias',
        'Amas-TV',
        'ADN40',
        'AZD-AztecaJalisco',
        'AZD-AztecaQuintanaRoo',
        'Code-Passbacks/',
      ],
      Apps: ['AZI-Apps-Azteca (29153227)'],
      Envivo: [
        'AZI-Azteca-Noticias',
        'P40-Proyecto-40',
        'AZI-Azteca-Trece',
        'AZI-Azteca-7',
      ],
      SuperApp: ['AZI-Super-App'],
      InstantArticles: ['AZD-Instant-Article'],
      Roku: ['AZD-Roku (21919173872)'],
      FutbolSites: ['AZD-Futbol-Sites'],
      BEHOLDER: ['BEHOLDER'],
      Youtube: ['YouTube to ContenTV Shared (36100987)'],
    },
  ];

  listTemp: any;

  adUnits;
  cambios_no_guardados: number;
  placements;
  apiBusy: boolean;
  reset1: boolean;
  reset2: boolean;
  apiBusyButton: boolean;

  constructor(
    public apiAdManager: ApiAdManagerService,
    public apiLogin: LoginService,
    public fb: FormBuilder,
    private modalService: NzModalService
  ) {
    this.formModal = this.fb.group({
      nombre: ['', Validators.required],
    });
    this.apiBusy = true;
  }

  ngOnInit(): void {
    this.loadData();
  }
  closeModalTest() {}

  loadData() {
    this.apiBusy = true;

    this.apiAdManager.networkMain().subscribe(
      (resp) => {
        // console.log(resp);
        this.apiBusy = false;
        this.adUnits = resp.message.adunits;
        this.cambios_no_guardados = resp.message.cambios_no_guardados;
        this.placements = resp.message.placements;
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiAdManager.getListConfigReport().subscribe(
      (resp) => {
        console.log(resp);
        if (resp.message.length !== 0) {
          this.listTemp = resp.message[0].lista;
        } else {
          this.listTemp = [];
        }
        console.log(this.listTemp);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get f() {
    return this.formModal.controls;
  }

  subirCambios() {
    if (this.cambios_no_guardados > 0) {
      this.modalService.create({
        nzMaskClosable: false,
        nzCancelText: null,
        nzOkText: null,
        nzClosable: false,
        nzFooter: null,
        nzContent: UpChangeManagerComponent,
      });
    }
  }

  configReport() {
    this.isConfigReport = true;
  }

  cancelConfigReport(data) {
    this.listTemp = data.data;
    this.isConfigReport = data.active;
  }

  saveConfigReport(data) {
    this.listTemp = data.data.lista;
    this.isConfigReport = data.acitve;
  }

  openModalReport(data) {
    console.log(data);
    this.listTemp = data.data;
    this.isVisible = data.isVisibleModal;
  }

  closeModal() {
    this.listTemp.value.push(this.formModal.value.nombre);
    this.formModal.reset();
    this.isVisible = false;
  }

  sincronizar() {
    this.modalService.create({
      nzMaskClosable: false,
      nzCancelText: null,
      nzOkText: null,
      nzClosable: false,
      nzFooter: null,
      nzOnCancel: (x) => {
        console.log('cerrar');
      },
      nzContent: SincronizarComponent,
    });
  }

  downLoadReport() {
    this.apiBusyButton = true;
    const url = `${
      this.apiAdManager._baseURL
    }/reporte?key=${this.apiLogin.getKeyToken()}`;
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Accept: '*/*',
      }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        this.apiBusyButton = false;
        var file = new Blob([blob], { type: 'application/zip' });
        var fileURL = URL.createObjectURL(file);
        var link = document.createElement('a');
        link.href = fileURL;
        link.click();
      });
  }
}
