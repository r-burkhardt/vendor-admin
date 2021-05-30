import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHome } from './seller-home';

describe('SellerHomeComponent', () => {
  let component: SellerHome;
  let fixture: ComponentFixture<SellerHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerHome ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
