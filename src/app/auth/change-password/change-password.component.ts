import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  msjError: string = '';
  formChangePassword: FormGroup;
  type1: boolean = false;
  type2: boolean = false;
  equalsPassword: boolean = true;

  constructor(
    public fb: FormBuilder,
    private modalService: NzModalService,
    public route: Router
  ) {
    this.formChangePassword = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.formChangePassword.controls;
  }

  ngOnInit(): void {}

  changeType1() {
    this.type1 = !this.type1;
  }

  changeType2() {
    this.type2 = !this.type2;
  }

  changePass(closeIcon, modal) {
    this.modalService.create({
      nzCancelText: null,
      nzOkText: null,
      nzFooter: null,
      nzWidth: 400,
      // nzCloseIcon: closeIcon,
      nzContent: modal,
    });
  }

  confirmPassword(e) {
    if (this.f.newPassword.value === this.f.confirPassword.value) {
      this.equalsPassword = true;
    } else {
      this.equalsPassword = false;
    }
  }

  closeRefModal(id) {
    this.destroyModal(id);
    this.route.navigate(['login']);
  }

  destroyModal(id) {
    id.destroy();
  }
}
