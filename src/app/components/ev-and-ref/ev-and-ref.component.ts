import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cor : string = "white";
  changeColor(corRecebida: string)
  {
    this.cor = corRecebida
  }


  color(color)
  {
    color.style.background = 'pink';
  }
  tamanho : number = 10;
  size(ref:HTMLElement)
  {
    ref.style.height = this.tamanho + "px";
    this.tamanho += 5;
  }
  background(ref:HTMLElement)
  {
    ref.style.background ='linear-gradient(red, orange, yellow, green, blue, indigo, violet)';
  }
}
