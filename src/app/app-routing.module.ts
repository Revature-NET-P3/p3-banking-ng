import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from "./components/accounts/accounts.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component"


const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: '', component: LandingPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }