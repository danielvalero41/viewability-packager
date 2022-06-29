import { ApiAdManagerService } from './../services/api-ad-manager.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  formModal: FormGroup;

  isConfigReport: boolean;
  isVisible: boolean;
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

  constructor(
    public apiAdManager: ApiAdManagerService,
    public fb: FormBuilder
  ) {
    this.formModal = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formModal.controls;
  }

  configReport() {
    this.isConfigReport = true;
  }

  openModalReport(data) {
    console.log(data);
    this.listTemp = data.data;
    this.isVisible = data.isVisibleModal;
  }

  closeModal() {
    this.listTemp.value.push(this.formModal.value.nombre);
    this.isVisible = false;
  }
}
