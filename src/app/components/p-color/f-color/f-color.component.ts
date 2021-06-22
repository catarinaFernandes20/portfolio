import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-f-color',
  templateUrl: './f-color.component.html',
  styleUrls: ['./f-color.component.css']
})
export class FColorComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }
  color : string = "";
  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      params => this.color = params.color
    )
  }

}
