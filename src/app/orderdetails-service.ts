import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class OrdersDetailsService {
  getOrders() {
    return [
      {
        Id: 1,
        OrderName: 'Veg',
        OrderPrice: '100Rs',
        Location : "Bangolroe",
        DeleveryDate : "21-08-2025",
        Service : "Zomoto",
        ContactNo: 7205655555,
        FeebackFromCustomers : "Yes , this is good . rating 4/5"
      },
      {
        Id: 2,
        OrderName: 'Non-Veg',
        OrderPrice: '200Rs',
        Location : "Hyderabd",
        DeleveryDate : "22-08-2025",
        Service : "Swiggy",
        ContactNo: 56555555,
        FeebackFromCustomers : "Yes , this is good . rating 3.5/5"
      },
    ];
  }
}