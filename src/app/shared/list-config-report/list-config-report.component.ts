import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'list-config-report',
  templateUrl: './list-config-report.component.html',
  styleUrls: ['./list-config-report.component.scss'],
})
export class ListConfigReportComponent implements OnInit {
  @Output() openModal = new EventEmitter<any>();

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

  list = [];

  constructor() {
    for (const key in this.listConfig[0]) {
      const element = this.listConfig[0];
      this.list.push({
        key: key,
        value: element[key],
        active: false,
      });
    }
  }

  ngOnInit(): void {}

  activedAdd(index) {
    this.list[index].active = !this.list[index].active;
  }

  addConfig(data) {
    this.openModal.emit({
      isVisibleModal: true,
      data: data,
    });
  }
}
