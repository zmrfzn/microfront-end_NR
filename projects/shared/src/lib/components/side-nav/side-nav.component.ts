import { Component, Input, OnInit } from '@angular/core';
import { navItems } from '../../models/side-nav';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
@Input() title: string = 'cfm-shell';
@Input() items: navItems[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

}
