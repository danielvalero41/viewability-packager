import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent implements OnInit {
  formRecovery: FormGroup;
  apiBusy: boolean;
  constructor(
    public fb: FormBuilder,
    private modalService: NzModalService,
    public route: Router,
    public apiLogin: LoginService
  ) {
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
    this.apiBusy = true;
    Auth.forgotPassword(this.f.email.value)
      .then((data) => {
        this.apiBusy = false;
        console.log('a verification code is sent');
        this.apiLogin.userName = this.f.email.value;
        this.modalService.create({
          nzCancelText: null,
          nzOkText: null,
          nzFooter: null,
          nzWidth: 400,
          nzContent: modalApprove,
        });
      })
      .catch((err) => {
        console.log(err);
        this.apiBusy = false;
        this.modalService.create({
          nzCancelText: null,
          nzOkText: null,
          nzFooter: null,
          nzWidth: 400,
          nzContent: modalReject,
        });
      });

    // let test = {
    //   email: 'a@gmail.com',
    // };

    // if (this.f.email.value === test.email) {
    // } else {

    // }
  }

  closeRefModal(id) {
    this.destroyModal(id);
  }

  toRecoveryPassword(id) {
    this.destroyModal(id);
    this.route.navigate(['/login/recovery-password']);
  }

  destroyModal(id) {
    id.destroy();
  }

  toLogin() {
    this.route.navigate(['/login']);
  }
}
