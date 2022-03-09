import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStoreComponent } from './orders-store.component';

describe('OrdersStoreComponent', () => {
  let component: OrdersStoreComponent;
  let fixture: ComponentFixture<OrdersStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
