import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
//import { AlertController } from '@ionic/angular';
import { AgregarPage } from '../agregar/agregar';


@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  agregarRoot = AgregarPage;
  constructor(public deseosService: DeseosService) {

      
  }

}
