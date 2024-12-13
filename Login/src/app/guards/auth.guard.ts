// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
// import { AuthService } from "../Services/auth.service";
// import { catchError, map } from "rxjs/operators";
// import { Observable, of } from "rxjs";
// import { inject } from "@angular/core";
 
// export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
 
//   const isLoggedIn = authService.isloggedIn();
 
//   if (isLoggedIn) {
//     return true;
//   } else {
//     console.warn('User is not logged in. Redirecting to login page.');
//     router.navigate(['/Login']);
//     return false;
//   }
// };


// // import { inject } from '@angular/core';
// // import { CanActivateFn, Router } from '@angular/router';
 
// // export const authGuard: CanActivateFn = (route, state) => {
// //   const router=inject(Router);
// //   if(isLocalStorageAvailable())
// //   {
// //     const localData = localStorage.getItem('token');
// //     if(localData !=null)
// //     {
// //       return true;
// //     }
// //     else{
// //       router.navigateByUrl('/login')
// //       return false;
// //     }
// //   }
// //   else
// //   {
// //     return false;
// //   }
// // };
// // function isLocalStorageAvailable() {
// //   try {
// //     localStorage.setItem('test', 'test');
// //     localStorage.removeItem('test');
// //     return true;
// //   } catch (e) {
// //     return false;
// //   }
// // }
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
 
export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  if(isLocalStorageAvailable())
  {
    const localData = localStorage.getItem('token');
    if(localData !=null)
    {
      return true;
    }
    else{
      router.navigateByUrl('/Login')
      return false;
    }
  }
  else
  {
    return false;
  }
};
function isLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
}