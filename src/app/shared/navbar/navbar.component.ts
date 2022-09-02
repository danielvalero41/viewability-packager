import { LoginService } from './../../auth/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdManagerService } from 'src/app/home/services/api-ad-manager.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  optionSelected: string;

  constructor(
    public router: Router,
    public apiAdManager: ApiAdManagerService,
    public apiLogin: LoginService
  ) {}

  ngOnInit(): void {
    let route = this.router.url.split('/');
    this.optionSelected = route[1];
  }

  toNavigate(link) {
    this.optionSelected = link;
    this.router.navigate(['home/' + link]);
  }

  logout() {
    this.apiLogin.logoutUser();
  }
}
