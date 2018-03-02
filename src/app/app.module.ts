import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {UiModule} from './ui/ui.module';
import {ToasterService} from './shared/services/toaster.service';
import {ConnectionService, ConnectionComponent} from './shared/components/connection/';
import {IonicApp, IonicModule} from 'ionic-angular';
import {Network} from '@ionic-native/network';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    AppRoutingModule,
    UiModule,
    IonicModule.forRoot(AppComponent),

    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [ToasterService, Network, ConnectionService],
  bootstrap: [IonicApp],
})
export class AppModule {
}
