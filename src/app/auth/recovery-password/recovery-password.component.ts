import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
})
export class RecoveryPasswordComponent implements OnInit {
  formRecoveryPassword: FormGroup;
  type1: boolean = false;
  type2: boolean = false;
  equalsPassword: boolean = true;

  constructor(public fb: FormBuilder, private modalService: NzModalService) {
    this.formRecoveryPassword = this.fb.group({
      code: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formRecoveryPassword.controls;
  }

  changeType1() {
    this.type1 = !this.type1;
  }

  changeType2() {
    this.type2 = !this.type2;
  }

  confirmPassword(e) {
    if (this.f.newPassword.value === this.f.confirPassword.value) {
      this.equalsPassword = true;
    } else {
      this.equalsPassword = false;
    }
  }

  changePass(modalSuccess, modalReject) {
    let test = {
      password: 'asdfasdf',
    };

    if (this.f.newPassword.value === test.password) {
      this.modalService.create({
        nzCancelText: null,
        nzOkText: null,
        nzFooter: null,
        nzWidth: 400,
        nzContent: modalSuccess,
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
