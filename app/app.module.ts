import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tab1Page } from './pages/tab1/tab1';
import { Tab2Page } from './pages/tab2/tab2';
import { TabsPage } from './pages/tabs/tabs';
import { AgregarPage } from './pages/agregar/agregar';

// servicios
import { DeseosService } from './services/deseos.service';

/*
// importar rutas
import { ROUTES } from './app.routes';

//<--- Modulo de rutas
import { RouterModule } from '@angular/router';
*/
@NgModule({
  declarations: [
    MyApp,
    Tab2Page,
    Tab1Page,
    AgregarPage,
    TabsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tab2Page,
    Tab1Page,
    AgregarPage,
    TabsPage
  ],
  providers: [DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
