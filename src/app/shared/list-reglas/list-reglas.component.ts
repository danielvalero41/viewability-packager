import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list-reglas',
  templateUrl: './list-reglas.component.html',
  styleUrls: ['./list-reglas.component.scss'],
})
export class ListReglasComponent implements OnInit {
  @Input() isModal: boolean;
  @Input() listReglas;
  @Input() listaCompleta;
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
    // debugger;

    if (changes.listReglas.currentValue?.length !== 0) {
      this.listReglas = changes.listReglas.currentValue;
      if (this.listReglas) {
        this.fixList();
      }
    }

    this.listSelected = [];
    if (changes.isModal?.currentValue === false) {
      // this.listReglas.forEach((element) => {
      //   if (element.selected === true) {
      //     this.listSelected.push(element);
      //   }
      // });
    } else {
      this.fixListComplet();
      // this.listSelected = this.listReglas;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  activeRule(index) {
    if (this.isModal === true)
      this.listSelected[index].selected = !this.listSelected[index].selected;
  }

  fixList() {
    this.listReglas.forEach((element) => {
      debugger;
      element.selected = true;
    });
  }

  fixListComplet() {
    // // debugger;
    if (this.listReglas && this.listaCompleta) {
      this.listReglas.forEach((element) => {
        delete element.selected;
      });
      this.listaCompleta.forEach((element, index) => {
        let findId = this.listReglas.findIndex(
          (x) =>
            x.environmentType === element.environmentType &&
            x.fullDisplayString === element.fullDisplayString
        );
        console.log(findId);
        if (findId !== -1) {
          element.selected = true;
        } else {
          element.selected = false;
        }
      });
      // // debugger;
    }
    // // debugger;
  }
}
