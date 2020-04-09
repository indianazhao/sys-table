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
    email: 'mike@sysage.com'
  }, {
    name: 'Jean',
    age: 30,
    gender: 'female',
    email: 'jean@sysage.com'
  }, {
    name: 'Alice',
    age: 44,
    gender: 'female',
    email: 'alice@sysage.com'
  }, {
    name: 'Bob',
    age: 28,
    gender: 'male',
    email: 'bob@sysage.com'
  }];
}
