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
  ],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ListOptionComponent,
    ListAdUnitSizesComponent,
    ListReglasComponent,
    ListConfigReportComponent,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ListAplicationIdComponent,
  ],
})
export class SharedModule {}
