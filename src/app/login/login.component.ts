import { Component, ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router:Router){

  }

  @ViewChild('loginTextBox')  loginText:ElementRef<any>;


  evtLogin(){

     let name = this.loginText.nativeElement.value;

     let firstName =  localStorage.getItem("firstName");

     if(firstName  == name){
        console.log("Yes!!! YOu are having the permission");
        this.router.navigate(['../orders']);
     }

     else{
      console.log("No!!! YOu do't have the permission");
      localStorage.setItem("firstName","Madan");
     }



  }


}
