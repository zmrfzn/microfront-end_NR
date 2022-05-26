import { Component } from '@angular/core';
import { navItems } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-two';
  menus: navItems[] = [];

  ngOnInit(): void {
    this.menus = [
      { name: 'Shared Http', route:'' },
     
  
    ]
  }
}
