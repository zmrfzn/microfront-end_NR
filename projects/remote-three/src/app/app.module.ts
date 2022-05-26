import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocoaModule } from '@mitel-internal/cocoa';
import { SharedModule } from 'projects/shared/src/public-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    CocoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
