import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { navItems } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() appTitle: string = 'cfm-shell';
  @Input() menuItems: navItems[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
