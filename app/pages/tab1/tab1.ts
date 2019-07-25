import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  constructor(private app: App, public deseosService: DeseosService) {

      app.setScrollDisabled(true);
  }

}
