import {Injectable} from '@angular/core';
import {ToasterDto} from '../model/toaster.model';
import {Toast, ToastController} from 'ionic-angular';

@Injectable()
export class ToasterService {
  toast: Toast;

  constructor(public toastCtrl: ToastController) {
  }

  mostrarToaster(mensagem: string,
                 duration: number = 5000,
                 position: 'top' | 'middle' | 'bottom' = 'bottom',
                 cssClass: string = '',
                 showCloseButton: boolean = false) {
    const toaster = new ToasterDto();
    toaster.mensagem = mensagem;
    toaster.duration = duration;
    toaster.position = position;
    toaster.cssClass = cssClass;
    toaster.showCloseButton = showCloseButton;

    this.toast = this.toastCtrl.create();
    this.toast.setMessage(mensagem);
    this.toast.setDuration(duration);
    this.toast.setPosition(position);
    if (cssClass !== '') {
      this.toast.setCssClass(cssClass);
    }
    if (showCloseButton !== false) {
      this.toast.setShowCloseButton(showCloseButton);
    }

    this.toast.present();
  }
  esconderToaster() {
    this.toast.dismissAll();
  }
}
