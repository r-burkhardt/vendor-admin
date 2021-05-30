import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YButtonComponent } from './y-button.component';

describe('YButtonComponent', () => {
  let component: YButtonComponent;
  let fixture: ComponentFixture<YButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
