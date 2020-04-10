import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sys-table';
  items = ['Mike', 'Jean', 'Alice'];

  header = ['name', 'age', 'gender', 'email'];

  data = [{
    name: 'Mike',
    age: 24,
    gender: 'male',
    email: 'mike@sysage.com',
    address: '4005 Orchard Dr, Midland, MI, 48640'
  }, {
    name: 'Jean',
    age: 30,
    gender: 'female',
    email: 'jean@sysage.com',
    address: '5041 Enterprise Rd, Summit, MS, 39666'
  }, {
    name: 'Alice',
    age: 44,
    gender: 'female',
    email: 'alice@sysage.com',
    address: '3650 Nix Rd, Phil Campbell, AL, 35585'
  }, {
    name: 'Bob',
    age: 28,
    gender: 'male',
    email: 'bob@sysage.com',
    address: '49138 Limestone Dr, Macomb, MI, 48044'
  }];
}
