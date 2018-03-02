import { Injectable } from '@angular/core';
import {Network} from '@ionic-native/network';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConnectionService {

  public disconnectSubscription;
  public connectSubscription;
  connectionChange: Subject<Object> = new Subject<Object>();

  constructor(private network: Network) { }

  checkConnection() {
    this.connectSubscription = this.network.onConnect().subscribe(data => {
      this.connectionChange.next(data);
    }, error => console.error(error));

    this.disconnectSubscription = this.network.onDisconnect().subscribe(data => {
      this.connectionChange.next(data);
      }, error => console.error(error));
  }
}
