import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sys-table',
  templateUrl: './sys-table.component.html',
  styleUrls: ['./sys-table.component.scss']
})
export class SysTableComponent implements OnInit {

  @Input() header: string;
  @Input() items: string[];

  constructor() { }

  ngOnInit() {
  }

}
