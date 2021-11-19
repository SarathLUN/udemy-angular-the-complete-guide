import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl:'./server.component.html'
})
export class ServerComponent{
  serverID: number = 19;
  serverStatus: string = "Online";
  getServerStatus(){
    return this.serverStatus;
  }
}
