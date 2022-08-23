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

  type: boolean = false;
  msjError: string;

  constructor(
    public fb: FormBuilder,
    private modalService: NzModalService,
    public route: Router
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
    let test = {
      email: 'a@gmail.com',
      password: '1234',
    };

    if (
      test.email === this.f.email.value &&
      test.password === this.f.password.value
    ) {
      this.route.navigate(['login/change-password']);
      // this.modalService.create({
      //   nzCancelText: null,
      //   nzOkText: null,
      //   nzFooter: null,
      //   nzWidth: 400,
      //   // nzCloseIcon: closeIcon,
      //   nzContent: modal,
      // });
    } else {
      this.msjError = '¡Datos Incorrectos, intenta nuevamente!';
    }
  }

  recovery() {
    this.route.navigate(['login/recovery']);
  }

  closeRefModal(id) {
    this.destroyModal(id);
  }

  destroyModal(id) {
    id.destroy();
  }
}
