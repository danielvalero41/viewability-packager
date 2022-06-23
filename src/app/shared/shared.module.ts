import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from './ng-zorro-antd/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOptionComponent } from './list-option/list-option.component';
import { ListAdUnitSizesComponent } from './list-ad-unit-sizes/list-ad-unit-sizes.component';

@NgModule({
  declarations: [ListOptionComponent, ListAdUnitSizesComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    ListOptionComponent,
    ListAdUnitSizesComponent,
  ],
})
export class SharedModule {}