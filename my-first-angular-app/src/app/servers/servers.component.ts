import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  // templateUrl: './servers.component.html',
  template: `
    <label for="">Server name</label>
    <input type="text" class="form-control" [(ngModel)]="serverName" />
    <!-- <p>{{ serverName }}</p> -->
    <button
      class="btn btn-primary"
      [disabled]="!allowNewServer"
      (click)="onCreateServer()"
    >
      Add Server
    </button>
    <!-- <p [innerText]="allowNewServer"></p> -->
    <!-- <p>{{ serverCreationStatus }}</p> -->
    <p *ngIf="serverCreated; else noServer">
      Server was created, server name is {{ serverName }}
    </p>
    <ng-template #noServer>
      <p>No server</p>
    </ng-template>
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
  serverCreated = false;

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is +  ' + this.serverName;
  }

  onUpdateServerName(event: InputEvent) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
