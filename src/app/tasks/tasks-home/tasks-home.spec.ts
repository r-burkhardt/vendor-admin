import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksHome } from './tasks-home';

describe('TasksHomeComponent', () => {
  let component: TasksHome;
  let fixture: ComponentFixture<TasksHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksHome ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
