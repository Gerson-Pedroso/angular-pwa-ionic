export class ToasterDto {
  mensagem: string;
  duration: number;
  position: 'top' | 'middle' | 'bottom';
  cssClass: string;
  showCloseButton: boolean;
  dismissOnPageChange: boolean;

  constructor(data?: any) {
    if (data) {
      const props = Object.keys(data);
      for (const p in props) {
        if (data[props[p]]) {
          this[props[p]] = data[props[p]];
        }
      }
    }
  }
}
