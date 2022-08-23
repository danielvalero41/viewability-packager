import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent implements OnInit {
  formRecovery: FormGroup;

  constructor(public fb: FormBuilder, private modalService: NzModalService) {
    this.formRecovery = this.fb.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formRecovery.controls;
  }

  sendEmail(modalApprove, modalReject) {
    let test = {
      email: 'a@gmail.com',
    };

    if (this.f.email.value === test.email) {
      this.modalService.create({
        nzCancelText: null,
        nzOkText: null,
        nzFooter: null,
        nzWidth: 400,
        nzContent: modalApprove,
      });
    } else {
      this.modalService.create({
        nzCancelText: null,
        nzOkText: null,
        nzFooter: null,
        nzWidth: 400,
        nzContent: modalReject,
      });
    }
  }

  closeRefModal(id) {
    this.destroyModal(id);
  }

  destroyModal(id) {
    id.destroy();
  }
}
