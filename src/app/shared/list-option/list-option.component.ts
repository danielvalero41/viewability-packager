import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'list-option',
  templateUrl: './list-option.component.html',
  styleUrls: ['./list-option.component.scss'],
})
export class ListOptionComponent implements OnInit {
  @Input() listAd;
  @Input() height_calculate;
  @Output() adUnitSelect = new EventEmitter<any>();

  height_temp;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // console.log(this.listAd);
    // console.log(this.test);
    // debugger;
    this.fixList();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.cdr.detectChanges();
    console.log(changes);
    if (changes.height_calculate) {
      this.height_calculate = changes.height_calculate.currentValue + 70;
      this.height_temp = this.height_calculate;
    }
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
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
    this.adUnitSelect.emit({
      id: this.listAd[index].id,
      name: this.listAd[index].name,
    });
  }
}
