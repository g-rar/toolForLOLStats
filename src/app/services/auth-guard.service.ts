import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Controller } from './control/Controller.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private controller:Controller, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable(sub => {
      this.controller.getLoggedUser()
        .then(res => {
          sub.next(true);
        }).catch(err => {
          sub.next(false);
          this.router.navigate(['/unauthorized'])
        })
    })
  }
}
