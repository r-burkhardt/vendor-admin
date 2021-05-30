import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagement } from './order-management';

describe('OrderManagementComponent', () => {
  let component: OrderManagement;
  let fixture: ComponentFixture<OrderManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
