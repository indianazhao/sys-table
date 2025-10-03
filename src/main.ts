import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SysTableModule } from './app/sys-table/sys-table.module';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, SysTableModule)
  ]
})
  .catch(err => console.error(err));
