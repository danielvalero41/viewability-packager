import { LoginService } from './../../auth/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdManagerService } from 'src/app/home/services/api-ad-manager.service';
import { ListAdSizeFavoriteComponent } from '../modals/list-ad-size-favorite/list-ad-size-favorite.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  optionSelected: string;
  listAdSizesFav = [];
  constructor(
    public router: Router,
    public apiAdManager: ApiAdManagerService,
    public apiLogin: LoginService,
    private modalService: NzModalService
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

  toModal(e) {
    this.apiAdManager.listAdSizesFav().subscribe(
      (resp) => {
        console.log(resp);
        this.listAdSizesFav = resp;
        this.optionSelected = e;

        this.modalService.create({
          nzMaskClosable: false,
          nzCancelText: null,
          nzOkText: null,
          nzFooter: null,
          nzComponentParams: { list: this.listAdSizesFav },
          nzStyle: { top: '50px' },
          nzWidth: 1200,
          nzContent: ListAdSizeFavoriteComponent,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
