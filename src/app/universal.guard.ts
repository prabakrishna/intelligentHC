import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      let result = false;
      const region = sessionStorage.getItem("region");
      const env  = sessionStorage.getItem("env");
      if (region != null && env != null) {
        result = true;
      } else {
        alert("Please select Region and Environment");
        this.router.navigate(["ChangeRegion"]);
      }  
      return result;
  }
}
