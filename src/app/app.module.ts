import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ChucknorrisComponent } from './components/chucknorris/chucknorris.component';
import { ErroComponent } from './components/erro/erro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PColorComponent } from './components/p-color/p-color.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    CookiesComponent,
    ChucknorrisComponent,
    ErroComponent,
    NavbarComponent,
    EvAndRefComponent,
    ListaDeComprasComponent,
    PColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
