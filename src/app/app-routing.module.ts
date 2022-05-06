import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { PrincipalPageComponent } from './pages/principal-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = //[{path:'',redirectTo:'/user/login',pathMatch:'full'},
[
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrincipalPageComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent }
];
  // children: [
  //   //{ path: 'registration', component: RegistrationComponent },
  // ],
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
