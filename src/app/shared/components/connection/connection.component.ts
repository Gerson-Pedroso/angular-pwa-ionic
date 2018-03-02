import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ConnectionService} from './connection.service';
import {ToasterService} from '../../services/toaster.service';

@Component({
  selector: 'seed-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  subscription: Subscription;
  public online = true;
  public offline = false;
  public hide = false;

  constructor(public _toasterService: ToasterService, private _connectionService: ConnectionService) { }

  ngOnInit() {
    this.subscribeToConnection();
  }

  private subscribeToConnection() {
    this.subscription = this._connectionService
      .connectionChange
      .subscribe(connection => {
        if (connection['type'] === 'offline') {
          this._toasterService.mostrarToaster('não há conexão com a internet');
          setTimeout(() => {
            this.online = false;
            this.offline = true;
            this.hide = false;
          }, 5200);
        } else {
          this._toasterService.mostrarToaster('há conexão com a internet');
          setTimeout(() => {
            this.online = true;
            this.offline = false;
            this.hide = false;
          }, 5200);
        }
      });
  }

  clickEvent() {
    if (this.online === true) {
      this._toasterService.mostrarToaster('há conexão com a internet');
      this.hide = true;
    } else {
      this._toasterService.mostrarToaster('não conexão com a internet');
    }
  }
}
