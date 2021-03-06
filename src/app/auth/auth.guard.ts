import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map, take} from 'rxjs/operators';
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducer";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      map(user => { // use take(1) to just take latest user value and unsubscribe
        const isAuth = !!user; // returns everything not null as true else false
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      }));
  }


  // for eairlier versions of Angular
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.user.pipe(map(user => {
  //     return !!user; // returns everything not null as true else false
  //   }), tap(isAuth => {
  //     if (!isAuth) {
  //       this.router.navigate(['/auth']);
  //     }
  //   }));
  // }
}
