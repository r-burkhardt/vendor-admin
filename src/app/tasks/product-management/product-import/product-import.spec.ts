import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImport } from './product-import';

describe('ProductImportComponent', () => {
  let component: ProductImport;
  let fixture: ComponentFixture<ProductImport>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImport ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
