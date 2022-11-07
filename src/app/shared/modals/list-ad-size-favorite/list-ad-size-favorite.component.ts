import { ApiAdManagerService } from './../../../home/services/api-ad-manager.service';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-list-ad-size-favorite',
  templateUrl: './list-ad-size-favorite.component.html',
  styleUrls: ['./list-ad-size-favorite.component.scss'],
})
export class ListAdSizeFavoriteComponent implements OnInit {
  @ViewChild('closeIcon') closeIcon: TemplateRef<any>;
  @Input() list;
  listAdSizeCompleta;
  listAdSize;

  constructor(
    private modal: NzModalRef,
    public apiAdManager: ApiAdManagerService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.listAdSize = this.list.message.favorites;
    this.listAdSizeCompleta = this.list.message.adUnitSizes;
  }

  closeModal(e) {
    this.modal.destroy();
  }

  changeData(e) {
    this.apiAdManager.updateListAdSizesFav(e).subscribe(
      (resp) => {
        console.log(resp);
        this.apiAdManager.updateListFav.next(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
