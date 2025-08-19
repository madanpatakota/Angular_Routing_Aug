import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ordersdetails',
  templateUrl: './ordersdetails.component.html',
  styleUrls: ['./ordersdetails.component.css']
})
export class OrdersdetailsComponent implements OnInit {
    
   constructor(private activateRoute:ActivatedRoute){

   }

  //Lets take the subscription of the activateroute .. stage wenever your compoent is initlized
  ngOnInit(): void {
     this.activateRoute.params.subscribe((parameterData)=>{
           console.log(parameterData);
     })
  }

}
