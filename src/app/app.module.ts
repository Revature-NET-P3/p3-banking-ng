import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentareaComponent } from './components/contentarea/contentarea.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { AccountviewComponent } from "./components/accountview/accountview.component"

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ContentareaComponent,
    AccountsComponent,
    LandingPageComponent,
    AccountviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [
    CookieService,
    UserService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
