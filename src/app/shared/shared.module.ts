import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from './ng-zorro-antd/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOptionComponent } from './list-option/list-option.component';
import { ListAdUnitSizesComponent } from './list-ad-unit-sizes/list-ad-unit-sizes.component';
import { ListReglasComponent } from './list-reglas/list-reglas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListConfigReportComponent } from './list-config-report/list-config-report.component';
import { UpChangeManagerComponent } from './modals/up-change-manager/up-change-manager.component';
import { SincronizarComponent } from './modals/sincronizar/sincronizar.component';
import { ListAplicationIdComponent } from './list-aplication-id/list-aplication-id.component';
import { NgxMaskModule } from 'ngx-mask';
import { AddParentIdComponent } from './modals/add-parent-id/add-parent-id.component';
import { ErrorComponent } from './modals/error/error.component';
import { SearchAdUnitComponent } from './search-ad-unit/search-ad-unit.component';
@NgModule({
  declarations: [
    ListOptionComponent,
    ListAdUnitSizesComponent,
    ListReglasComponent,
    NavbarComponent,
    ListConfigReportComponent,
    UpChangeManagerComponent,
    SincronizarComponent,
    ListAplicationIdComponent,
    AddParentIdComponent,
    ErrorComponent,
    SearchAdUnitComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ListOptionComponent,
    ListAdUnitSizesComponent,
    ListReglasComponent,
    ListConfigReportComponent,
    NavbarComponent,
    RouterModule,
    ListAplicationIdComponent,
    SearchAdUnitComponent,
  ],
})
export class SharedModule {}
