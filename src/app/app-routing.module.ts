import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AccountViewComponent } from "./components/account-view/account-view.component"
import { AccountsComponent } from './components/accounts/accounts.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accountList', component: AccountViewComponent, data: { type: 0 } },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'profile', component: UserDetailsComponent },
  { path: 'about', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
