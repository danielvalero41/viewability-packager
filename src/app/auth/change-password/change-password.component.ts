import { LoginService } from './../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

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
  test: any;

  constructor(
    public fb: FormBuilder,
    private modalService: NzModalService,
    public route: Router,
    public apiLogin: LoginService
  ) {
    this.formChangePassword = this.fb.group({
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

  get f() {
    return this.formChangePassword.controls;
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.test = true;
        return true;
      })
      .catch(() => {
        this.test = false;
        return false;
      });
  }

  changeType1() {
    this.type1 = !this.type1;
  }

  changeType2() {
    this.type2 = !this.type2;
  }

  changePass(closeIcon, modal) {
    // console.log(this.apiLogin.user);

    Auth.completeNewPassword(this.apiLogin.user, this.f.confirPassword.value)
      .then((user) => {
        console.log('User verificado', user);
        this.modalService.create({
          nzCancelText: null,
          nzOkText: null,
          nzFooter: null,
          nzWidth: 400,
          nzCloseIcon: closeIcon,
          nzContent: modal,
        });
        // Auth.currentAuthenticatedUser().then((user) => {
        //   console.log('User autenticado', user);
        //   debugger;
        // });
      })
      .catch((error) => {
        console.log(error);
      });

    // Auth.changePassword(
    //   this.apiLogin.user,
    //   this.apiLogin.Oldpassword,
    //   this.f.confirPassword.value
    // ).then((resp) => {

    // });

    // await Auth.currentAuthenticatedUser().then(async (user) => {
    //   debugger;
    // return Auth.changePassword(
    //   user,
    //   this.apiLogin.Oldpassword,
    //   this.f.confirPassword.value
    // );
    // });
    // .then(
    //   (resp) => {
    //     console.log(resp);
    //     debugger;

    //     this.modalService.create({
    //       nzCancelText: null,
    //       nzOkText: null,
    //       nzFooter: null,
    //       nzWidth: 400,
    //       nzCloseIcon: closeIcon,
    //       nzContent: modal,
    //     });
    //   },
    //   (error) => {
    //     console.log(error);
    //     debugger;
    //   }
    // );
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

  toLogin() {
    this.route.navigate(['/login']);
  }
}
