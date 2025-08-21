import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  

  OrdersList:any;
  constructor(private ordersService:OrdersService , private router:Router){

     this.OrdersList =  this.ordersService.getOrders();

  }


  navOrdersDetailsPage(id:any){

     this.router.navigate(["../orders-details" , id]);   //Param

     //this.router.navigate(["../orders-details"] , {queryParams:{'Id':id}}); //query param

     //this.router.navigate(["../orders-details"] , {fragment:id}); //fragment

  }



}
