import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { CheckingAccountComponent } from './components/checking-account/checking-account.component';
import { LoanAccountComponent } from './components/loan-account/loan-account.component';
import { TdcAccountComponent } from './components/tdc-account/tdc-account.component';


import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/api.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/services/token-interceptor.service';
import { ViewContainerDirective } from './directives/view-container.directive';
import { TransactionsService } from './services/transactions.service';
import { NewsComponent } from './components/news/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ContentareaComponent,
    AccountsComponent,
    LandingPageComponent,
    LoginUserComponent,
    RegisterUserComponent,
    AccountViewComponent,
    UserDetailsComponent,
    CheckingAccountComponent,
    LoanAccountComponent,
    TdcAccountComponent,
    ViewContainerDirective,
    NewsComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    CookieService,
    UserService,
    ApiService,
    TransactionsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  entryComponents: [CheckingAccountComponent, LoanAccountComponent, TdcAccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
