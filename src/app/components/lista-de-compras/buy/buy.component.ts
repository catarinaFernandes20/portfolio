import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/class/artigo';
import { ArtigoService } from 'src/app/service/artigo.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  artigoService : ArtigoService;
  constructor(lista: ArtigoService) {
    this.artigoService = lista;
   }

  ngOnInit(): void {
  }

  comprar(artigo: Artigo)
  {
    artigo.carrinho = true;
    console.log("Artigo", artigo)
  }

}
