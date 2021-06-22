import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*this.getCookies();*/
  }

  aceiteiCookie : boolean;

  aceitarCookies(cookie : HTMLElement)
  {
    localStorage.setItem("cookie", "1");
    cookie.style.display = "none";
  }
  lerCookies()
  {
    /*
      Operador ternario
      ? = se; : = senao
    */
    this.aceiteiCookie = localStorage.getItem("cookie") == "1" ? true : false;
  }
}
