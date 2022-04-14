import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { InshortsComponent } from './inshorts/inshorts.component';
import { LoginSigninComponent } from './login-signin/login-signin.component';
import { SelectedShortComponent } from './selected-short/selected-short.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-signin', pathMatch: 'full'},
  { path: 'login-signin', component: LoginSigninComponent},
  // { path: '', redirectTo: '/inshorts', pathMatch: 'full' },
  { path: 'inshorts', component: InshortsComponent, canActivate:[AuthGuard]},
  { path: 'selected-short', component: SelectedShortComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
