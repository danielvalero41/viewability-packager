import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ApiAdManagerService } from 'src/app/home/services/api-ad-manager.service';

@Component({
  selector: 'app-add-parent-id',
  templateUrl: './add-parent-id.component.html',
  styleUrls: ['./add-parent-id.component.scss'],
})
export class AddParentIdComponent implements OnInit {
  listParentId = [];
  indexTemp: any;
  touched: boolean = false;
  formSearch: FormGroup;

  constructor(
    public apiAdManager: ApiAdManagerService,
    private modal: NzModalRef,
    public fb: FormBuilder
  ) {
    this.formSearch = this.fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  get f() {
    return this.formSearch.controls;
  }

  loadData() {
    this.apiAdManager.loadParentId({ status: 'ACTIVE' }).subscribe(
      (resp) => {
        console.log(resp);
        resp.message.forEach((element) => {
          this.listParentId.push({
            id: element.id,
            name: element.name,
            selected: false,
          });
        });

        // console.log(this.listParentId);
        // debugger;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  activeAplicationId(index) {
    if (this.indexTemp !== index) {
      this.listParentId.forEach((element) => {
        element.selected = false;
      });
    }
    this.listParentId[index].selected = !this.listParentId[index].selected;
    this.indexTemp = index;
    // this.sendDataMobile.emit(this.listMobile[index]);
  }

  canceledModal() {
    this.modal.destroy();
  }

  saveChangeModal() {
    let data = this.listParentId.find((x) => x.selected === true);
    delete data.selected;
    this.apiAdManager.parentId.next(data);
    this.modal.destroy();
  }

  searchParentId() {
    let search;

    if (this.f.search.valid) {
      search = {
        status: 'ACTIVE',
        id: this.f.search.value,
      };
    } else {
      search = {
        status: 'ACTIVE',
      };
    }

    this.apiAdManager.loadParentId(search).subscribe(
      (resp) => {
        console.log(resp);
        this.touched = true;
        this.listParentId = [];
        resp.message.forEach((element) => {
          this.listParentId.push({
            id: element.id,
            name: element.name,
            selected: false,
          });
        });

        // console.log(this.listParentId);
        // debugger;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
