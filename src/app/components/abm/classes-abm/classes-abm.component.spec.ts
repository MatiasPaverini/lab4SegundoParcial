import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesAbmComponent } from './classes-abm.component';

describe('ClassesAbmComponent', () => {
  let component: ClassesAbmComponent;
  let fixture: ComponentFixture<ClassesAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
