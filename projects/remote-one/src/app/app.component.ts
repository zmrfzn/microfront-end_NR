import { Component } from '@angular/core';
import { navItems } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-one';
  menus: navItems[] = [];


  ngOnInit(): void {
    this.menus = [
      { name: 'Simple Dynamic', route:'' },
      { name: 'Dynamic Routing', route:'/dynamic-routing' }
  
    ]
  }
}
