import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleDynamicComponent } from './simple-dynamic/simple-dynamic.component';
import { SharedModule } from 'projects/shared/src/public-api';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { GeneralTableComponent } from './dynamic-routing/general-table/general-table.component';
import { DarkTableComponent } from './dynamic-routing/dark-table/dark-table.component';
import { DarkHeadTableComponent } from './dynamic-routing/dark-head-table/dark-head-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDynamicComponent,
    DynamicRoutingComponent,
    GeneralTableComponent,
    DarkTableComponent,
    DarkHeadTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
