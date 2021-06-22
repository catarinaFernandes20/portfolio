import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/class/artigo';
import { ArtigoService } from 'src/app/service/artigo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  artigoService : ArtigoService;
  precoNumber: number = 0;
  constructor(private lista: ArtigoService) {
    this.artigoService = lista;
   }

  ngOnInit(): void {}

  adicionarLista(nome:string, preco:string)
  {
    this.precoNumber = Number(preco);
    this.artigoService.listaArtigo.push(new Artigo(nome, this.precoNumber));
  }

}
