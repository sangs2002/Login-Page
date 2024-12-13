import { Injectable } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,private toast:NgToastService,private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.gettoken();

    // If authToken exists, clone the request and attach the Authorization header.
    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}` // Assuming token should be added as a Bearer token
        }
      });

      // Send the cloned request with the updated header to the next handler.
      return next.handle(authReq);
    }

    // If authToken does not exist, proceed with the original request.
    return next.handle(req).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse)
        {
          if(err.status===401 || err.status===400 || err.status===204){
            this.toast.warning({detail:"warning",summary:"Token is expired, Login again"});
           
            this.router.navigate(['Login']);
          }
        }
        return throwError(()=> new Error("Some other error occured"))
      })
    )
  }
}
