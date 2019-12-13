import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentareaComponent } from './components/contentarea/contentarea.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { CheckingAccountComponent } from './components/checking-account/checking-account.component';

import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/api.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ViewContainerDirective } from './directives/view-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ContentareaComponent,
    AccountsComponent,
    LandingPageComponent,
    AccountViewComponent,
    UserDetailsComponent,
    CheckingAccountComponent,
    ViewContainerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    MatTableModule,
  ],
  providers: [
    CookieService,
    UserService,
    ApiService,
  ],
  entryComponents: [CheckingAccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
