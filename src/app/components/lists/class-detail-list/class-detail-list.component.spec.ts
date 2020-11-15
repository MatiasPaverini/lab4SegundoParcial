import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailListComponent } from './class-detail-list.component';

describe('ClassDetailListComponent', () => {
  let component: ClassDetailListComponent;
  let fixture: ComponentFixture<ClassDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
