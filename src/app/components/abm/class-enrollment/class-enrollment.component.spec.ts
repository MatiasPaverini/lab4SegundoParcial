import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEnrollmentComponent } from './class-enrollment.component';

describe('ClassEnrollmentComponent', () => {
  let component: ClassEnrollmentComponent;
  let fixture: ComponentFixture<ClassEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
