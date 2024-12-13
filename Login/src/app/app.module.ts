import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { AuthInterceptor } from './Interceptor/token.interceptor';
import { CustomPipe } from './custom.pipe';

//import { CustommPipe } from './customm.pipe';
//import { CustommPipe } from './customm.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CustomPipe,
  
    //CustommPipe,
    //Authenticate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true

}],
  bootstrap: [AppComponent]
})
export class AppModule { }
