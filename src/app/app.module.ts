import { environment } from '../environments/environment';

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
import { AccountViewComponent } from "./components/account-view/account-view.component"

import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< HEAD
import { ApiBaseService } from './services/api-base.service';
=======
import { AccountViewComponent } from "./components/account-view/account-view.component"
>>>>>>> rename-account-view

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ContentareaComponent,
    AccountsComponent,
    LandingPageComponent,
    AccountViewComponent
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
    {provide: ApiBaseService, useClass: environment.apiService }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
