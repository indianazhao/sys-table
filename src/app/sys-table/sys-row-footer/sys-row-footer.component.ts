import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sys-row-footer',
  template: '<strong>footer</strong>',
  standalone: true
})
export class SysRowFooterComponent implements OnInit {

  @ContentChild('tpl') tpl!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
