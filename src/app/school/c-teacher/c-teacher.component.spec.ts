import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTeacherComponent } from './c-teacher.component';

describe('CTeacherComponent', () => {
  let component: CTeacherComponent;
  let fixture: ComponentFixture<CTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
