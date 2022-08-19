import { FormBuilder, FormGroup } from '@angular/forms';

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ApiAdManagerService } from 'src/app/home/services/api-ad-manager.service';

@Component({
  selector: 'list-reglas',
  templateUrl: './list-reglas.component.html',
  styleUrls: ['./list-reglas.component.scss'],
})
export class ListReglasComponent implements OnInit {
  @Input() isModal: boolean;
  @Input() listReglas;
  @Input() listaCompleta;
  @Output() closeModal = new EventEmitter<any>();
  @Output() changeData = new EventEmitter<any>();

  _isModal: boolean;
  formSearch: FormGroup;
  name;

  listTempCompleta = [];

  listSelected = [];

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // debugger;

    if (!changes.listReglas) {
      console.log(changes);
      console.log('No existe');
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

    if (changes.listReglas?.currentValue?.length !== 0) {
      this.listReglas = changes.listReglas?.currentValue;
      if (this.listReglas) {
        this.fixList();
      }
    }
  }

  constructor(
    public fb: FormBuilder,
    public apiAdManager: ApiAdManagerService
  ) {
    this.formSearch = this.fb.group({
      desde: [''],
      hasta: [''],
    });
  }

  get f() {
    return this.formSearch.controls;
  }

  test(e) {
    console.log(e);
  }

  search() {
    console.log('dasdas');

    // console.log(this.listaCompleta);
    // debugger;
    // this.listTempCompleta = this.listaCompleta;
    // console.log(this.listaCompleta);
    // console.log(this.formSearch.value.desde);
    // console.log(this.formSearch.value.hasta);

    this.listaCompleta.push({
      desde: parseFloat(this.formSearch.value.desde),
      hasta: parseFloat(this.formSearch.value.hasta),
    });

    this.apiAdManager.addRules(this.listaCompleta).subscribe(
      (resp) => {
        console.log(resp);
        this.apiAdManager.searchRules({}).subscribe(
          (resp) => {
            console.log(resp);
            this.listaCompleta = resp.message;
          },
          (error) => {
            console.log(error);
          }
        );
        this.formSearch.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    // this.formSearch.valueChanges.subscribe((resp) => {
    //   debugger;
    //   console.log(resp);
    // });
  }

  activeRule(index) {
    if (this.isModal === true)
      this.listaCompleta[index].selected = !this.listaCompleta[index].selected;
  }

  fixList() {
    this.listReglas.forEach((element) => {
      element.selected = true;
    });
    // console.log(this.listReglas);
    // debugger;
  }

  fixListComplet() {
    if (this.listReglas?.length > 0 && this.listaCompleta) {
      this.listReglas.forEach((element) => {
        delete element.selected;
      });
      this.listaCompleta.forEach((element, index) => {
        let findId = this.listReglas.findIndex(
          (x) => x.desde === element.desde && x.hasta === element.hasta
        );
        // console.log(findId);
        if (findId !== -1) {
          element.selected = true;
        } else {
          element.selected = false;
        }
      });
    }
    // // debugger;
  }

  canceledModal() {
    console.log(this.listReglas);
    this.closeModal.emit(false);
  }

  saveChangeModal() {
    this.listReglas = this.listaCompleta;
    this.listReglas = this.listReglas.filter((x) => x.selected === true);

    this.changeData.emit(this.listReglas);
    this.closeModal.emit(false);
  }
}
