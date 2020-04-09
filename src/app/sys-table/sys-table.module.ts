import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysTableComponent } from './sys-table.component';

@NgModule({
  declarations: [SysTableComponent],
  imports: [
    CommonModule
  ],
  exports: [SysTableComponent]
})
export class SysTableModule { }
