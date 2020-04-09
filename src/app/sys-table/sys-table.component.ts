import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-sys-table',
  templateUrl: './sys-table.component.html',
  styleUrls: ['./sys-table.component.scss']
})
export class SysTableComponent implements OnInit {

  @Input() header: string[];
  @Input() data: any[];

  groups: any[];

  constructor() { }

  ngOnInit() {
    this.grouping(this.data);
  }

  grouping(data: any) {
    this.groups = _.chain(data)
                   .groupBy('gender')
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
