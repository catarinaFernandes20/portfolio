import { Injectable } from '@angular/core';
import { Artigo } from '../class/artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor() { }

  listaArtigo : Array<Artigo>  = new Array<Artigo>();
}
