import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassListComponent } from './teacher-class-list.component';

describe('TeacherClassListComponent', () => {
  let component: TeacherClassListComponent;
  let fixture: ComponentFixture<TeacherClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
