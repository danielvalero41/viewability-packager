import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzInputModule,
    NzFormModule,
    NzModalModule,
    NzSelectModule,
    NzDatePickerModule,
  ],
})
export class NgZorroAntdModule {}
