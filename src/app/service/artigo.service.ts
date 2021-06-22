import { Injectable } from '@angular/core';
import { Artigo } from '../class/artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  nome: string;
  preco: number;
  carrinho: boolean;

  constructor(nome: string, preco: number) {
    this.nome=nome;
    this.preco = preco;
    this.carrinho = false;
  }

  listaArtigo : Array<Artigo>  = new Array<Artigo>();
}
