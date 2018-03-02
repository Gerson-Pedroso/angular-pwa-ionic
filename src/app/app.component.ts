import {ApplicationRef, Component, NgZone} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ConnectionService} from './shared/components/connection/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public platform: Platform,
              private zone: NgZone,
              public application: ApplicationRef,
              private _connectionService: ConnectionService) {
    this.initializeApp();
    this.connection();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();

      this.platform.resize.asObservable().subscribe((event) => {
        this.zone.run(() => {
          this.application.tick();
        });
      });
      // this.outlet.activateEvents.subscribe(event => {
      //   const mc = this.outlet.locationInjector.get(MenuController);
      //   const hasRightMenu = mc.getMenus().length;
      //   console.log("----lenght: " + hasRightMenu);
      // });
    });
  }

  connection() {
    this._connectionService.checkConnection();
  }
 }

