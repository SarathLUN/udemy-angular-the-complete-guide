import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // templateUrl: './servers.component.html',
  template: `
    <p>Using attribute selector.</p>
    <hr>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
