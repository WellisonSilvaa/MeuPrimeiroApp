import { Component } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  quantidadePaginas;
  public cronometro: any;
  public tempo: any;

  constructor() {}

  iniciar(){
    this.tempo = 0;
    this.cronometro = setInterval(() => {
      this.tempo = this.tempo + 1;
      console.log(this.tempo);
    }, 1000);
  }

}
