import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  myLogs:Array<any> = [];

  onToggleDetail() {
    this.showParagraph = !this.showParagraph;
    const items = new Date();
    this.myLogs.push(items);
    console.log(this.myLogs);
  }
}
