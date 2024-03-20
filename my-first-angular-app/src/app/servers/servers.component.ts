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
      [disabled]="allowNewServer"
      (click)="onCreateServer()"
    >
      Add Server
    </button>
    <!-- <p [innerText]="allowNewServer"></p> -->
    <!-- 대괄호는 특정 디렉티브(ex. ngStyle)의 일부 속성에 바인딩 하려는 것 -->
    <p
      [ngStyle]="{ color: getColor() }"
      [ngClass]="{ online: serverStatus === 'online' }"
    >
      {{ getServerStatus() }}
    </p>
    <p *ngIf="serverCreated; else noServer">
      Server was created, server name is {{ serverName }}
    </p>
    <ng-template #noServer>
      <p>No server</p>
    </ng-template>
  `,
  // styleUrl: './servers.component.css',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'tests';
  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
    // console.log('constructor');
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  serverId = 10;
  serverStatus = 'offline';

  serverCreated = false;

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is +  ' + this.serverName;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onUpdateServerName(event: InputEvent) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
