import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysTableComponent } from './sys-table.component';
import { SysRowFooterComponent } from './sys-row-footer/sys-row-footer.component';

@NgModule({
  declarations: [
    SysTableComponent,
    SysRowFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SysTableComponent,
    SysRowFooterComponent
  ]
})
export class SysTableModule { }
