import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {


  OrdersList:any;
  constructor(private ordersService:OrdersService){

     this.OrdersList =  this.ordersService.getOrders();

  }




}
