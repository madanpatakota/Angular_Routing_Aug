import { CanDeactivateFn } from '@angular/router';


export const canDecativateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
 
 
  var isStatus = window.confirm("Are you exit??");
  if(isStatus){
      console.log("OK");
      return true;
  }
  else{
      console.log("!!!");
      return false;
  }

};
