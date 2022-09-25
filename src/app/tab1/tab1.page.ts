import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public quantidadePaginas: number;
  public cronometro: any;
  public tempo: number;
  public cronIniciado = false;
  public resultado: any;

  constructor() {
    this.resultado = null;
  }

    start(){
      if(this.quantidadePaginas > 0 && this.quantidadePaginas != null){
      this.cronIniciado = true;
      this.tempo = 0;
      this.cronometro = setInterval(() => {
        this.tempo ++;
      }, 1000);
    }else{
      alert('Informe um números de páginas');
    }
    }
    stop(){
      this.cronIniciado = false;
      clearInterval(this.cronometro);

      this.mostrarResult();
    }
    mostrarResult(){
      this.tempo = this.tempo * this.quantidadePaginas;
      this.resultado = new Date(this.tempo * 1000).toISOString().substr(11, 8);
    }

    reiniciar(){
      this.quantidadePaginas = null;
      this.tempo = 0;
      this.cronIniciado =false;
      this.resultado = null;
    }
}
