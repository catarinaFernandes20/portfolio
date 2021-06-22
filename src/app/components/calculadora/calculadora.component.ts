import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1 : number;
  num2 : number;
  resultado : number;
  sinal : string = "+";

  operacoes()
  {
    switch(this.sinal)
    {
      case "+":
        this.resultado = Number(this.num1) + Number(this.num2);
      break;
      case "-":
        this.resultado = Number(this.num1) - Number(this.num2);
      break;
      case "/":
        this.resultado = Number(this.num1) / Number(this.num2);
      break;
      case "*":
        this.resultado = Number(this.num1) * Number(this.num2);
      break;
      default:
        this.resultado = Number(this.num1) + Number(this.num2);
      break;
    }
  }

}
