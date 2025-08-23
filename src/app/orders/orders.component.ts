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



  ordersNavigation(tabName:string){
    if(tabName ==   'Overview'){
        this.router.navigate(['/orders/moreinfo'])
    }
    else if(tabName == 'Benifits' ){
        this.router.navigate(['/orders/benefits'])
    }
  }

  
// <!-- 
// <div>
//     <button routerLink="/orders/moreinfo" class="btn btn-secondary">Overview</button> |
//     <button routerLink="/orders/benefits" class="btn btn-danger">Benifts</button> |
// </div> -->


// <div>
//     <button (click)="moreDetails('Overview')" class="btn btn-secondary">Overview</button> |
//     <button (click)="moreDetails('Benifits')" class="btn btn-danger">Benifts</button> |
// </div>


}
