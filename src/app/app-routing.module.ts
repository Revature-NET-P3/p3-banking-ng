import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AccountViewComponent } from "./components/account-view/account-view.component"
import { AccountsComponent } from './components/accounts/accounts.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateNewAccountComponent } from './components/create-new-account/create-new-account.component';
import { NewsComponent } from './components/news/news/news.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';


const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] },
  { path: 'accountList', component: AccountViewComponent, data: { type: 0 }, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionListComponent, data: {account: 0}, canActivate: [AuthGuard] },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'profile', component: UserDetailsComponent , canActivate: [AuthGuard]},
  { path: 'about', component: LandingPageComponent },
  { path: 'createnewaccount', component: CreateNewAccountComponent },
  { path: 'Login', component: LoginUserComponent },
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
