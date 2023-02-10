import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  navigate(tab: String) {
    switch(tab) {
      case 'home': {}
      case 'history' : {}
    }
  }

  ngOnInit() {
  }

}