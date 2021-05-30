import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInput } from './product-input';

describe('ProductInputComponent', () => {
  let component: ProductInput;
  let fixture: ComponentFixture<ProductInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
