import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./app.template'),
  styles: [
    require('../../assets/shared-styles'),
    require('./app.styles'),
  ],
})
export class App {
  public neptuneGif = require('../../assets/images/neptune.gif');
}
