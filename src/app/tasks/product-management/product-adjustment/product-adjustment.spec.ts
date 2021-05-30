import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdjustment } from './product-adjustment';

describe('ProductAdjustmentComponent', () => {
  let component: ProductAdjustment;
  let fixture: ComponentFixture<ProductAdjustment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdjustment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdjustment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
