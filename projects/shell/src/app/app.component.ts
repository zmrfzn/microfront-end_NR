import { Component } from '@angular/core';
import { navItems } from 'projects/shared/src/public-api';
import { MicrofrontendService } from './services/microfrontend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  menus: navItems[] = [];

  constructor(private microSvc: MicrofrontendService) {
    this.menus = [
      // { name: 'dashboard', route: '/' },
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

    this.menus.push({name:'MFE4', route:'mfe4'});

  

  }

  onLinkClick() {}
}
