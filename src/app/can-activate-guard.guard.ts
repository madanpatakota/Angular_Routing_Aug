import { CanActivateFn } from '@angular/router';

export const canActivateGuardGuard: CanActivateFn = (route, state) => {

  let name = "Admin";   // login screen i goint to take the value

  if(name == "Admin1"){
      return true
  }
  else {
    return false;
  }
  //return false;
};
