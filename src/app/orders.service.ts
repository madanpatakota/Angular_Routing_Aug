import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class OrdersService {
  getOrders() {
    return [
      {
        Id: 1,
        OrderName: 'Veg',
        OrderPrice: '100Rs',
      },
      {
        Id: 2,
        OrderName: 'Non-Veg',
        OrderPrice: '200Rs',
      },
    ];
  }
}
