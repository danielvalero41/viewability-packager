import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  type: boolean = false;
  msjError: string;

  constructor(public fb: FormBuilder) {
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

  login() {
    let test = {
      email: 'a@gmail.com',
      password: '1234',
    };

    if (
      test.email === this.f.email.value &&
      test.password === this.f.password.value
    ) {
      alert('Abrir modal');
    } else {
      this.msjError = '¡Datos Incorrectos, intenta nuevamente!';
    }
  }
}
