import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLookup } from './product-lookup';

describe('ProductLookup', () => {
  let component: ProductLookup;
  let fixture: ComponentFixture<ProductLookup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLookup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLookup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
