import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDefault } from './product-default';

describe('ProductDefaultComponent', () => {
  let component: ProductDefault;
  let fixture: ComponentFixture<ProductDefault>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDefault ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDefault);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
