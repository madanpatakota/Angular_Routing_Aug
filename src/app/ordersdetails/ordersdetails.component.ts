import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersDetailsService } from '../orderdetails-service';


@Component({
  selector: 'app-ordersdetails',
  templateUrl: './ordersdetails.component.html',
  styleUrls: ['./ordersdetails.component.css']
})
export class OrdersdetailsComponent implements OnInit {
    
   ordersData:any=[];
   constructor(private activateRoute:ActivatedRoute , private orderDetailsService:OrdersDetailsService){

   }

  //Lets take the subscription of the activateroute .. stage wenever your compoent is initlized
  ngOnInit(): void {
     this.activateRoute.params.subscribe((parameterData:any)=>{
           console.log(parameterData);  // {orderID:1}

           let orders = this.orderDetailsService.getOrders();  // 2 records
           let paramterID = +parameterData.orderID
           this.ordersData = orders.filter((record)=>{ return record.Id == paramterID});


     })
  }

}
