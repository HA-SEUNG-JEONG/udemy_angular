import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServersComponent],
  template: ` <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>I'm in the App Component!</h3>
        <hr />
        <app-servers></app-servers>
      </div>
    </div>
  </div>`,
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {}
