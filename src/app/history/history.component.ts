import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  searchHistory = [];
  constructor() { }

  ngOnInit() {

    // Get Data from local storage
    this.searchHistory = JSON.parse(localStorage.getItem('users'));
    
  }

}