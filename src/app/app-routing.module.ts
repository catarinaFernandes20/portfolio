import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChucknorrisComponent } from './components/chucknorris/chucknorris.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ErroComponent } from './components/erro/erro.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FColorComponent } from './components/p-color/f-color/f-color.component';
import { PColorComponent } from './components/p-color/p-color.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"Calculadora", component:CalculadoraComponent
  },
  {
    path:"Cookies", component:CookiesComponent
  },
  {
    path:"Ev-and-Ref", component:EvAndRefComponent
  },
  {
    path:"Navbar", component:NavbarComponent
  },
  {path:"Erro", component:ErroComponent},
  {path:"Chuck Norris", component:ChucknorrisComponent},
  {path:"Lista De Compras", component:ListaDeComprasComponent,
    children:
    [
      {path:"add", component:AddComponent},
      {path:"buy", component:BuyComponent}
    ]
  },
  {path:"pColor", component:PColorComponent,
    children:
    [
      {path:"fColor", component:FColorComponent},
    ]
  },
  {path:"**", redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
