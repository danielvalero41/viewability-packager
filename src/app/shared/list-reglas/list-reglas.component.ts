import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list-reglas',
  templateUrl: './list-reglas.component.html',
  styleUrls: ['./list-reglas.component.scss'],
})
export class ListReglasComponent implements OnInit {
  @Input() isModal: boolean;

  listRules = [
    {
      desde: 0,
      hasta: 0.5,
      selected: true,
    },
    {
      desde: 0.5,
      hasta: 0.59,
      selected: true,
    },
    {
      desde: 0.6,
      hasta: 0.69,
      selected: true,
    },
    {
      desde: 0.7,
      hasta: 0.79,
      selected: true,
    },
    {
      desde: 0.8,
      hasta: 100,
      selected: true,
    },
    {
      desde: 0,
      hasta: 0.5,
      selected: true,
    },
    {
      desde: 0.5,
      hasta: 0.59,
      selected: true,
    },
    {
      desde: 0.6,
      hasta: 0.69,
      selected: true,
    },
    {
      desde: 0.7,
      hasta: 0.79,
      selected: true,
    },
    {
      desde: 0.8,
      hasta: 100,
      selected: true,
    },
    {
      desde: 0,
      hasta: 0.5,
      selected: true,
    },
    {
      desde: 0.5,
      hasta: 0.59,
      selected: true,
    },
    {
      desde: 0.6,
      hasta: 0.69,
      selected: true,
    },
    {
      desde: 0.7,
      hasta: 0.79,
      selected: true,
    },
    {
      desde: 0.8,
      hasta: 100,
      selected: true,
    },
  ];

  listSelected = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.listSelected = [];
    if (changes.isModal.currentValue === false) {
      this.listRules.forEach((element) => {
        if (element.selected === true) {
          this.listSelected.push(element);
        }
      });
    } else {
      this.listSelected = this.listRules;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  activeRule(index) {
    if (this.isModal === true)
      this.listSelected[index].selected = !this.listSelected[index].selected;
  }
}
