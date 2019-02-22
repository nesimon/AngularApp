import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1 align = "center">{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Computer Component Shop';
}
