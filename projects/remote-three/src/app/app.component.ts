import { Component } from '@angular/core';
import { CocoaCore } from '@mitel-internal/cocoa';
import { navItems } from 'projects/shared/src/public-api';

import * as manifest from './cocoa-manifest.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-three';
  menus: navItems[] = [];

  constructor(private cocoa:CocoaCore){}

  ngOnInit(): void {
    this.cocoa.register(manifest);
    this.menus = [
      { name: 'Cocoa Components', route:'' }
    ];

    this.cocoa.messageBus.listen('shared_cocoa1').subscribe(msg => {
      alert(`Message Received: ${msg.data}`,);
    })
  }
}
