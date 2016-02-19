import {Component} from 'angular2/core';

import {InnerComponent} from './inner-component/inner-component';

@Component({
  selector: 'app',
  directives: [ InnerComponent ],
  template: `
    <main>
      <inner-component></inner-component>
    </main>
  `
})
export class App {
  constructor() {

  }
}
