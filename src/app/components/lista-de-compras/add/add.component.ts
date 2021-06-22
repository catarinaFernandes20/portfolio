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

  constructor(private lista: ArtigoService) {
    this.artigoService = lista;
   }

  ngOnInit(): void {
  }

  adicionarLista(nome, preco)
  {
    this.artigoService.listaArtigo.push(new Artigo(nome, preco));
  }

}
