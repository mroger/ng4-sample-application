import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  year: number;
  manager: string;
  years: Array<number> = [ 2015, 2016, 2017, 2018, 2019, 2020 ];
  managers: Array<any> = [
    {id: 1, name: 'Manager 1'},
    {id: 2, name: 'Manager 2'},
    {id: 3, name: 'Manager 3'},
    {id: 4, name: 'Manager 4'},
    {id: 5, name: 'Manager 5'},
  ]

  constructor() { }

  ngOnInit() {
    this.year = 2017;
  }

  onSelectYear() {
    console.log(this.year);
  }

  onSelectManager() {
    console.log(this.manager);
  }

}
