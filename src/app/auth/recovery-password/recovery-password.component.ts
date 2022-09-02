import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Auth } from 'aws-amplify';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
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
  apiBusy: boolean;

  constructor(
    public fb: FormBuilder,
    private modalService: NzModalService,
    public apiLogin: LoginService,
    public route: Router
  ) {
    this.formRecoveryPassword = this.fb.group({
      code: ['', Validators.required],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
      confirPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
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
    this.apiBusy = true;
    Auth.forgotPasswordSubmit(
      this.apiLogin.userName,
      this.f.code.value,
      this.f.newPassword.value
    )
      .then((data) => {
        this.apiBusy = false;
        console.log(data);
        this.modalService.create({
          nzCancelText: null,
          nzOkText: null,
          nzFooter: null,
          nzWidth: 400,
          nzContent: modalSuccess,
        });
      })
      .catch((err) => {
        this.apiBusy = false;
        console.log(err);
        this.modalService.create({
          nzCancelText: null,
          nzOkText: null,
          nzFooter: null,
          nzWidth: 400,
          nzContent: modalReject,
        });
      });

    // Auth.verifyCurrentUserAttributeSubmit(
    //   this.apiLogin.attribute,
    //   this.f.code.value
    // )
    //   .then((resp) => {
    //     console.log(resp);

    //     Auth.currentAuthenticatedUser()
    //       .then((resp) => {
    //         console.log(resp);
    //         debugger;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });

    //   })
    //   .catch((e) => {
    //     console.log('failed with error', e);

    //   });

    // // if (this.f.newPassword.value === test.password) {
    // //   this.modalService.create({
    // //     nzCancelText: null,
    // //     nzOkText: null,
    // //     nzFooter: null,
    // //     nzWidth: 400,
    // //     nzContent: modalSuccess,
    // //   });
    // // } else {
    // //   this.modalService.create({
    // //     nzCancelText: null,
    // //     nzOkText: null,
    // //     nzFooter: null,
    // //     nzWidth: 400,
    // //     nzContent: modalReject,
    // //   });
    // // }
  }

  closeRefModal(id) {
    this.destroyModal(id);
  }

  toLogin(id) {
    // try {
    //   await Auth.confirmSignUp(this.apiLogin.userName, this.f.code.value);
    // } catch (error) {
    //   console.log('error confirming sign up', error);
    // }
    this.route.navigate(['/login']);
    this.destroyModal(id);
  }

  destroyModal(id) {
    id.destroy();
  }
  toBackLogin() {
    this.route.navigate(['/login']);
  }
}
