import { CanActivateFn , Router } from '@angular/router';
import { inject } from '@angular/core';

export const canActivateGuardGuard: CanActivateFn = (route, state) => {

 // let name = "Admin";   // login screen i goint to take the value

  let router = inject(Router);
  let name   = localStorage.getItem("firstName");

  if(name == "Madan"){
      return true
  }
  else {
    // i want to navigate to the login screen;
    router.navigate(['/login']);
    return false;
  }
  //return false;
};
