import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [],
  // templateUrl: './servers.component.html',
  template: `
    <button class="btn btn-primary" [disabled]="!allowNewServer">
      Add Server
    </button>
  `,
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    console.log('constructor');
  }

  serverId = 10;
  serverStatus = 'offline';
}
