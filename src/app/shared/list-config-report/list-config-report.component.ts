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
  selector: 'list-config-report',
  templateUrl: './list-config-report.component.html',
  styleUrls: ['./list-config-report.component.scss'],
})
export class ListConfigReportComponent implements OnInit {
  @Output() openModal = new EventEmitter<any>();
  @Output() cancelConfigReport = new EventEmitter<any>();
  @Output() saveConfigReport = new EventEmitter<any>();
  @Input() listConfig;

  apiBusy: boolean;
  isVisible: boolean;
  list = [];
  listTemp = [];
  data;

  constructor(public apiAdManager: ApiAdManagerService) {}

  ngOnInit(): void {
    // console.log(this.listConfig);
    // debugger;

    this.listTemp = [...this.listConfig];

    this.listConfig.forEach((element) => {
      this.list.push({
        key: element.name,
        value: element.adunits,
        active: false,
      });
    });

    // for (const key in this.listConfig) {
    //   const element = this.listConfig;
    //   this.list.push({
    //     key: key,
    //     value: element[key],
    //     active: false,
    //   });
    // }
  }

  activedAdd(index) {
    this.list[index].active = !this.list[index].active;
  }

  addConfig(data) {
    this.openModal.emit({
      isVisibleModal: true,
      data: data,
    });
  }

  cancelConfigRepor() {
    // console.log(this.listTemp);
    // console.log(this.listConfig);
    // debugger;
    this.cancelConfigReport.emit({
      active: false,
      data: this.listConfig,
    });
  }

  saveConfigRepor() {
    let body = [];
    this.list.forEach((element) => {
      delete element.active;
    });

    for (const key in this.list) {
      const element = this.list;
      body.push({
        name: element[key].key,
        adunits: element[key].value,
      });
    }

    this.data = {
      lista: body,
    };
    // console.log(data);
    // debugger;
    this.apiBusy = true;
    this.apiAdManager.loadConfigReport(this.data).subscribe(
      (resp) => {
        console.log(resp);
        this.apiBusy = false;
        this.isVisible = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeModal() {
    this.isVisible = false;
    this.saveConfigReport.emit({
      active: false,
      data: this.data,
    });
  }

  deleteReport(value, index, indexReport) {
    this.list[indexReport].value.splice(index, 1);
  }
}
