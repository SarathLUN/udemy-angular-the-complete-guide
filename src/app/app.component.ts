import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "";
  isEnableBtnResetUserName = true;

  // check if userName is not empty
  onUpdateUserName(event: Event) {
    console.log(event);
    this.isEnableBtnResetUserName = (<HTMLInputElement>event.target).value === "";
  }

  onResetUserName() {
    this.userName = "";
    this.isEnableBtnResetUserName = true;
  }
}
