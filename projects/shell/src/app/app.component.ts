import { Component } from '@angular/core';
import { CocoaCore } from '@mitel-internal/cocoa';
import { navItems } from 'projects/shared/src/public-api';
import { MicrofrontendService } from './services/microfrontend.service';

import * as manifest from './cocoa-manifest.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  menus: navItems[] = [];

  constructor(private microSvc: MicrofrontendService,private cocoa:CocoaCore) {
    this.menus = [
      { name: 'dashboard', route: '/' },
      { name: 'contacts', route: '/contacts' }
    ]
  }


  ngOnInit(): void {
    const dynamicRoutes = this.microSvc.loadConfig();
    dynamicRoutes.forEach(route => {
      this.menus.push({
        name: route.displayName, route: route.routePath
      });
    });

    this.cocoa.register(manifest);

    this.cocoa.messageBus.listen('shared_cocoa1').subscribe(msg => {
      alert(`Received from shared: ${msg.data}`);
    });

    this.cocoa.messageBus.listen('shell_app1').subscribe(msg => {
      alert(`Received from app/module: ${msg.data}`);
    });

  }

  onLinkClick() {}
}
