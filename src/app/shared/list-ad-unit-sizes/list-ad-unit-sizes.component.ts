import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'list-ad-unit-sizes',
  templateUrl: './list-ad-unit-sizes.component.html',
  styleUrls: ['./list-ad-unit-sizes.component.scss'],
})
export class ListAdUnitSizesComponent implements OnInit {
  @Input() isModal: boolean;
  @Input() listAdSize;
  @Input() listCompleta;
  @Output() closeModal = new EventEmitter<any>();
  @Output() changeData = new EventEmitter<any>();
  allSelected: boolean = false;
  listTemp = [];
  @Input() createAd;

  _createAd;
  listSelected = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.listSelected = [];

    if (changes.createAd?.currentValue) {
      this._createAd = changes.createAd.currentValue;
    }

    if (changes.isModal?.currentValue === false) {
      // this.listAd.forEach((element) => {
      //   if (element.selected === true) {
      //     this.listSelected.push(element);
      //   }
      // });
    } else {
      // this.listSelected = this.listAd;
      this.fixListComplet();
      // console.log(this.listCompleta);
      // // debugger;
    }

    if (changes?.listAdSize.currentValue?.length !== 0) {
      this.listAdSize = changes.listAdSize?.currentValue;
      if (this.listAdSize) {
        this.fixList();
      }
    }
  }

  ngOnInit(): void {}

  changeSelect() {
    this.allSelected = !this.allSelected;
    console.log(this.allSelected);

    if (this.allSelected) {
      this.listTemp = [...this.listCompleta];
      this.listCompleta = this.listCompleta.filter((x) => x.selected === true);
    } else {
      this.listCompleta = this.listTemp;
    }
  }

  fixListComplet() {
    if (this.listAdSize && this.listCompleta) {
      this.listAdSize.forEach((element) => {
        delete element.selected;
      });
      this.listCompleta.forEach((element, index) => {
        let findId = this.listAdSize.findIndex(
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
      // console.log(this.listCompleta);

      // debugger;
    }
  }

  fixList() {
    this.listAdSize.forEach((element) => {
      element.selected = true;
    });
  }

  activeAd(index) {
    if (this.isModal === true)
      this.listCompleta[index].selected = !this.listCompleta[index].selected;
  }

  canceledModal() {
    this.closeModal.emit(false);
  }

  saveChangeModal() {
    console.log('listCompleta', this.listCompleta);
    console.log('list a mostrar', this.listAdSize);
    console.log(this._createAd);

    this.listAdSize = this.listCompleta;
    this.listAdSize = this.listAdSize.filter((x) => x.selected === true);

    this.changeData.emit(this.listAdSize);
    this.closeModal.emit(false);
  }
}
