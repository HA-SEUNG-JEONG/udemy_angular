import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule],
  // templateUrl: './servers.component.html',
  template: `
    <label for="">Server name</label>
    <input type="text" class="form-control" [(ngModel)]="serverName" />
    <p>{{ serverName }}</p>
    <button
      class="btn btn-primary"
      [disabled]="allowNewServer"
      (click)="onCreateServer()"
    >
      Add Server
    </button>
    <!-- <p [innerText]="allowNewServer"></p> -->
    <p>{{ serverCreationStatus }}</p>
  `,
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'tests';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    console.log('constructor');
  }

  serverId = 10;
  serverStatus = 'offline';

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: InputEvent) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
