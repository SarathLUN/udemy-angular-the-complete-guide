import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output('svrCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    console.log(serverName.value);
    console.log(serverContent.value);
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    });
  }
}
