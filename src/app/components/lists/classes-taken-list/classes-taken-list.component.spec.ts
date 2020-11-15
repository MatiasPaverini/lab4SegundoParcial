import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesTakenListComponent } from './classes-taken-list.component';

describe('ClassesTakenListComponent', () => {
  let component: ClassesTakenListComponent;
  let fixture: ComponentFixture<ClassesTakenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesTakenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesTakenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
