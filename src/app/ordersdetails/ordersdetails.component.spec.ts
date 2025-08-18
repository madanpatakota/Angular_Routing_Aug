import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersdetailsComponent } from './ordersdetails.component';

describe('OrdersdetailsComponent', () => {
  let component: OrdersdetailsComponent;
  let fixture: ComponentFixture<OrdersdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersdetailsComponent]
    });
    fixture = TestBed.createComponent(OrdersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
