import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-aplication-id',
  templateUrl: './list-aplication-id.component.html',
  styleUrls: ['./list-aplication-id.component.scss'],
})
export class ListAplicationIdComponent implements OnInit {
  @Input() listMobile;
  @Output() sendDataMobile = new EventEmitter<any>();

  indexTemp: any;

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
    if (this.indexTemp !== index) {
      this.listMobile.forEach((element) => {
        element.selected = false;
      });
    }
    this.listMobile[index].selected = !this.listMobile[index].selected;
    this.indexTemp = index;
    this.sendDataMobile.emit(this.listMobile[index]);
  }
}
