import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  {path: 'register', component: UserFormComponent},
  {path: 'user', component: UserPageComponent},
  { path: 'login', component: LoginComponent},
  { path: '**',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.navigate(['/login']);
  }
}
