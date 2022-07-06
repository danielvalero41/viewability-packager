import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-aplication-id',
  templateUrl: './list-aplication-id.component.html',
  styleUrls: ['./list-aplication-id.component.scss'],
})
export class ListAplicationIdComponent implements OnInit {
  @Input() listMobile;
  @Output() sendDataMobile = new EventEmitter<any>();

  listAplication = [
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: false,
    },
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: true,
    },
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: false,
    },
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: false,
    },
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: false,
    },
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: false,
    },
    {
      applicationId: 2387971452,
      displayName: 'AztecaNoticias',
      selected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.listMobile);
    // debugger;
    this.fixList();
  }

  fixList() {
    this.listMobile.forEach((element) => {
      element.selected = false;
    });
  }

  activeAplicationId(index) {
    this.listMobile.forEach((element) => {
      element.selected = false;
    });
    this.listMobile[index].selected = !this.listMobile[index].selected;
    this.sendDataMobile.emit(this.listMobile[index]);
  }
}
