import { Component } from '@angular/core';

@Component({
  selector: 'mbo-main',
  template: require('./main.template'),
  styles: [require('./main.styles')],
})
export class Main {
  public neptuneGif = require('../../assets/images/neptune.gif');
}
