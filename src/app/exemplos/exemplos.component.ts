import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.scss']
})
export class ExemplosComponent implements OnInit {

  titulo = 'Exemplos!';
  urlImagem: string;
  valorAtual = 0;
  desabilitado = false;
  valorInput: string;

  constructor() {
    this.urlImagem = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }

  ngOnInit(): void {
  }

  resultadoUmMaiUm(): number {
    return 1 + 1;
  }

  maisUm() {
    this.valorAtual++;

    if (this.valorAtual > 4) {
      this.desabilitado = true;
    }

  }

  alterou() {
    this.urlImagem = null;
  }

}
