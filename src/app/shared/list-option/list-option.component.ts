import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-option',
  templateUrl: './list-option.component.html',
  styleUrls: ['./list-option.component.scss'],
})
export class ListOptionComponent implements OnInit {
  @Input() listAd;
  @Output() adUnitSelect = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.listAd);
    this.fixList();
  }

  fixList() {
    this.listAd.forEach((element) => {
      element.active = false;
    });
    this.listAd[0].active = true;
    this.adUnitSelect.emit({ id: this.listAd[0].id });
  }

  selected(index) {
    this.listAd.forEach((element) => {
      element.active = false;
    });
    this.listAd[index].active = true;
    this.adUnitSelect.emit({ id: this.listAd[index].id });
  }
}
