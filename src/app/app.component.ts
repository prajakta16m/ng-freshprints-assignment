import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'p-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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