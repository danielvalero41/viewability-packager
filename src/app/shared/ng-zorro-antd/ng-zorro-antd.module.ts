import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [NzInputModule, NzFormModule, NzModalModule],
})
export class NgZorroAntdModule {}