import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  apiBusy: boolean;
  type: boolean = false;
  msjError: string;

  constructor(
    public fb: FormBuilder,
    private modalService: NzModalService,
    public route: Router,
    public apiLogin: LoginService
  ) {
    this.formLogin = this.fb.group({
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
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.formLogin.controls;
  }

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe((x) => {
      this.msjError = '';
    });
  }

  changeType() {
    this.type = !this.type;
  }

  login(closeIcon, modal) {
    this.apiBusy = true;
    this.apiLogin.loginUser(this.f.email.value, this.f.password.value).then(
      (resp) => {
        this.apiBusy = false;
        if (resp) {
          if (!resp.challengeName) {
            this.apiLogin.getKey(this.f.email.value).subscribe(
              (resp) => {
                console.log(resp);
                if (resp.access === true) {
                  this.apiLogin.setKeyToken(resp.key);
                  this.route.navigate(['/home']);
                } else {
                  this.msjError =
                    '¡Ha ocurrido un error, el usuario no tiene acceso!';
                }
              },
              (error) => {
                console.log(error);
              }
            );
          }

          if (resp.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.apiLogin.user = resp;
            this.apiLogin.Oldpassword = this.f.password.value;
            this.route.navigate(['login/change-password']);
          }
        } else {
          this.msjError = '¡Datos Incorrectos, intenta nuevamente!';
        }
      },
      (error) => {
        this.apiBusy = false;
        this.msjError = '¡Datos Incorrectos, intenta nuevamente!';
      }
    );
    // debugger;
    // let test = {
    //   email: 'a@gmail.com',
    //   password: '1234',
    // };

    // if (user) {
    //   this.modalService.create({
    //     nzCancelText: null,
    //     nzOkText: null,
    //     nzFooter: null,
    //     nzWidth: 400,
    //     nzCloseIcon: closeIcon,
    //     nzContent: modal,
    //   });
    // } else {
    //   this.msjError = '¡Datos Incorrectos, intenta nuevamente!';
    // }
  }

  recovery() {
    this.route.navigate(['login/recovery']);
  }

  closeRefModal(id) {
    this.route.navigate(['login/change-password']);
    this.destroyModal(id);
  }

  destroyModal(id) {
    id.destroy();
  }
}
