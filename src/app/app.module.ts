import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersdetailsComponent } from './ordersdetails/ordersdetails.component';
import { canActivateGuardGuard } from './can-activate-guard.guard';
import { LoginComponent } from './login/login.component';
import { canDecativateGuard } from './can-decativate.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutusComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
   {
    path: 'orders-details',
    component: OrdersdetailsComponent,

  },
   {
    path: 'orders-details/:orderID',
    component: OrdersdetailsComponent,
    canActivate: [canActivateGuardGuard],
    canDeactivate : [canDecativateGuard]
   },
   {
    path: 'login',
    component: LoginComponent,
   },
   {
    path: '**',
    component: NotfoundComponent,
   }
];

@NgModule({
  declarations: [AppComponent , HomeComponent , OrdersComponent , OrdersdetailsComponent, LoginComponent, NotfoundComponent],
  imports: [BrowserModule , RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
