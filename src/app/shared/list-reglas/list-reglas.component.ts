import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-reglas',
  templateUrl: './list-reglas.component.html',
  styleUrls: ['./list-reglas.component.scss'],
})
export class ListReglasComponent implements OnInit {
  listRules = [
    {
      desde: 0,
      hasta: 0.5,
    },
    {
      desde: 0.5,
      hasta: 0.59,
    },
    {
      desde: 0.6,
      hasta: 0.69,
    },
    {
      desde: 0.7,
      hasta: 0.79,
    },
    {
      desde: 0.8,
      hasta: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
