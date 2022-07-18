import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() solicitRecibida;

  constructor(private modal: NzModalRef) {}

  ngOnInit(): void {}

  closeModal() {
    this.modal.destroy();
  }
}
