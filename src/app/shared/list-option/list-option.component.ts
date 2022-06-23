import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-option',
  templateUrl: './list-option.component.html',
  styleUrls: ['./list-option.component.scss'],
})
export class ListOptionComponent implements OnInit {
  listAd = [
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ACTIVE',
      active: true,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ARCHIVED',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'INACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ARCHIVED',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'INACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ARCHIVED',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'INACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ARCHIVED',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'INACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ACTIVE',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'ARCHIVED',
      active: false,
    },
    {
      id: 21804279267,
      name: 'AZD-AztecaUno',
      status: 'INACTIVE',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selected(index) {
    this.listAd.forEach((element) => {
      element.active = false;
    });
    this.listAd[index].active = true;
  }
}
