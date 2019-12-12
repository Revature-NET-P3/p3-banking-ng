import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BanktransactService} from './banktransact.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LinkdisableDirective } from './linkdisable.directive';

@NgModule({
  declarations: [
    AppComponent,
    LinkdisableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BanktransactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
