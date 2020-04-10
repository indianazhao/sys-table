import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import * as _ from 'lodash';
import { SysRowFooterComponent } from './sys-row-footer/sys-row-footer.component';

@Component({
  selector: 'app-sys-table',
  templateUrl: './sys-table.component.html',
  styleUrls: ['./sys-table.component.scss']
})
export class SysTableComponent implements OnInit {

  @Input() header: string[];
  @Input() data: any[];
  @Input() groupBy: string;
  @ContentChildren(SysRowFooterComponent) rowFooter!: QueryList<SysRowFooterComponent>;

  groups: any[];

  constructor() { }

  ngOnInit() {
    this.grouping(this.data);
  }

  grouping(data: any) {
    this.groups = [];
    if (!this.groupBy) {
      return;
    }
    this.groups = _.chain(data)
                   .groupBy(this.groupBy)
                   .toPairs()
                   .map(value => {
                     return {
                       id: value[0],
                       items: value[1]
                     };
                   })
                   .value();
  }

}
