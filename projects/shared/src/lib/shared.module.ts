import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    SideNavComponent,
    SideNavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideNavComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
