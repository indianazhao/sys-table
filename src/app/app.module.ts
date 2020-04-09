import { SysTableModule } from './sys-table/sys-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SysTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
