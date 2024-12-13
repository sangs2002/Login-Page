// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// //import { authenGuard } from './guards/authen.guard';
// //import { AuthGuard } from '"./guards/auth.guard';
// import { AuthGuard } from './guards/auth.guard';



// const routes: Routes = [
//   {
//     path:'', redirectTo:'/Login', pathMatch:'full'
//   },
//   {
//     path: "Login", component: LoginComponent,
//   },
//   {
//     path: "Signup", component: SignupComponent
//   },

//   {
//     path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
